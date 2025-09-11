document.addEventListener('DOMContentLoaded', () => {
    // 1. 首先，获取所有DOM元素和变量
    const galaxyContainer = document.getElementById('galaxy-container');
    const dynamicContent = document.getElementById('dynamic-content'); // 获取新的动态容器
    const header = document.querySelector('header');
    const backButton = document.getElementById('back-to-galaxy');
    const orbitPaths = document.getElementById('orbit-paths'); // 获取 a orbit paths element

    // galaxyData 变量已由 data.js 引入到全局，可直接使用

    // 2. 定义所有功能函数

    // 帮助函数：检查章节是否已完成
    function isChapterCompleted(chapter) {
        return chapter.taQuestionList && chapter.taQuestionList.every(p => p.accept);
    }
    
    // -- 切换回主星系视图 --
    function switchToGalaxyView() {
        const svg = document.getElementById('orbit-paths');
        svg.innerHTML = ''; // 清空可能存在的星轨
        galaxyContainer.classList.remove('nebula-view', 'solar-system-view');
        galaxyContainer.classList.add('galaxy-view');
        
        // 恢复body的默认背景图
        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('https://uploadfiles.nowcoder.com/images/20250725/0_1753414581128/AA49C42D7A74CC49DC5D1307F6AF71EE')`;

        // 清空可能存在的内联样式
        dynamicContent.style.flexDirection = '';
        backButton.classList.add('hidden');
        renderGalaxyView();
    }

    function renderGalaxyView() {
        header.classList.remove('hidden'); // 关键：在主视图确保Header可见
        dynamicContent.innerHTML = '';
        galaxyContainer.className = 'galaxy-view';
        
        // 修正遍历逻辑：遍历 galaxyData.regions 数组
        galaxyData.regions.forEach(regionData => {
            const regionEl = document.createElement('div');
            regionEl.className = 'region';
            if (regionData.image) {
                regionEl.style.backgroundImage = `url('${regionData.image}')`;
            }
            
            const titleEl = document.createElement('div');
            titleEl.className = 'region-title';
            // 安全检查：确保 regionData.name 存在
            if (regionData.name) {
                titleEl.innerHTML = regionData.name.replace(' - ', '<br/>- ');
            }
            regionEl.appendChild(titleEl);

            if (regionData.locked || regionData.status === 'locked') { // 兼容两种锁定状态
                regionEl.classList.add('locked');
                const lockIcon = document.createElement('div');
                lockIcon.className = 'lock-icon';
                lockIcon.textContent = '敬请期待';
                regionEl.appendChild(lockIcon);
            } else {
                // 修正调用：传递 regionData.id
                regionEl.onclick = () => renderNebulaView(regionData.id);
            }
            dynamicContent.appendChild(regionEl);
        });
        
        updateDashboardStats();
    }

    // 渲染星云视图 (题单内部)
    function renderNebulaView(regionId) {
        // 修正：通过 find 从数组中查找 region
        const regionData = galaxyData.regions.find(r => r.id === regionId);
        if (!regionData || regionData.locked) return;

        header.classList.add('hidden'); // 关键：在星云视图隐藏Header
        // 清空现有内容并设置背景
        dynamicContent.innerHTML = '';
        // 设置body的背景图，并保留统一的渐变蒙层
        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${regionData.image}')`;
        
        // 为容器添加视图特定类
        galaxyContainer.classList.remove('galaxy-view');
        galaxyContainer.classList.add('nebula-view');

        // 关键修复：从 solar-system-view 返回时，其 flex-direction: column 样式有时会“残留”
        // 在清空内容前，显式重置布局样式，确保能正确渲染为双列网格。
        dynamicContent.style.flexDirection = 'row';

        // 动态创建并添加行星 (章节)
        regionData.chapters.forEach(chapter => {
            const planetEl = document.createElement('div');
            planetEl.className = `planet ${chapter.type}`;
            if (isChapterCompleted(chapter)) {
                planetEl.classList.add('completed');
            }

            // 修正：使用新的 `index` 字段
            const chapterNumber = chapter.index; 
            planetEl.innerHTML = `
                <div class="planet-number">${String(chapterNumber).padStart(2, '0')}</div>
                <div class="planet-name">${chapter.name}</div>
            `;
            
            // 移除屏幕宽度判断，无条件应用坐标，让CSS决定如何显示
            planetEl.style.left = chapter.x;
            planetEl.style.top = chapter.y;

            // 附加数据以便后续使用
            planetEl.dataset.regionId = regionId;
            planetEl.dataset.chapterId = chapter.index; // 修正：使用新的 `index` 字段

            // 点击行星进入太阳系视图
            planetEl.addEventListener('click', () => {
                renderSolarSystemView(regionId, chapter.index); // 修正：使用新的 `index` 字段
            });

            dynamicContent.appendChild(planetEl);
        });

        // 移除屏幕宽度判断，无条件绘制轨道，让CSS决定是否显示
        drawOrbitPaths(regionData.chapters);
        
        backButton.classList.remove('hidden');
        backButton.onclick = switchToGalaxyView; // 明确设置返回按钮功能

        // 移除不再需要的JS布局修复
        /*
        // 关键修复：强制浏览器重新计算布局，解决容器高度不收缩的问题
        // 1. 先将容器高度设为0，打破旧的“最大高度”缓存
        dynamicContent.style.height = '0px';
        // 2. 通过访问一个布局属性，强制浏览器立即应用上面的样式（同步回流）
        void dynamicContent.offsetHeight; 
        // 3. 将高度恢复为auto，让它能根据新内容自然伸缩
        dynamicContent.style.height = '';
        */

        // setupDraggableScroll(dynamicContent); // 之前的滚动逻辑，已移除
    }

    // --- 新增：渲染太阳系视图的函数 ---
    function renderSolarSystemView(regionId, chapterId) {
        // 修正：通过 find 从数组中查找 region
        const regionData = galaxyData.regions.find(r => r.id === regionId);
        if (!regionData) return; // 安全检查

        // 关键修复：现在使用 `index` 字段进行比较
        const chapter = regionData.chapters.find(c => c.index === chapterId);
        if (!chapter) return; // 安全检查
        
        header.classList.add('hidden'); // 关键：在太阳系视图隐藏Header

        dynamicContent.innerHTML = '';
        const svg = document.getElementById('orbit-paths');
        svg.innerHTML = ''; // Clear orbits
        galaxyContainer.className = 'solar-system-view back-button-visible';
        backButton.onclick = () => renderNebulaView(regionId); // Back button now returns to Nebula View

        // 关键修复：清除可能由 nebula-view 残留的 flex-direction: 'row' 内联样式
        dynamicContent.style.flexDirection = '';

        // 设置body的背景图，并保留统一的渐变蒙层
        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${regionData.image}')`;

        // 创建太阳 (恒星)
        const sunEl = document.createElement('div');
        sunEl.className = 'sun';
        // 修正：使用新的 `index` 字段
        const sunChapterNumber = chapter.index;
        const chapterNumberHTML = `<div class="sun-chapter-number">${String(sunChapterNumber).padStart(2, '0')}</div>`;
        const chapterNameHTML = `<div class="sun-name">${chapter.name}</div>`;
        sunEl.innerHTML = chapterNumberHTML + chapterNameHTML;
        dynamicContent.appendChild(sunEl);

        // 创建行星轨道容器
        const planetsContainer = document.createElement('div');
        planetsContainer.className = 'planets-container';
        dynamicContent.appendChild(planetsContainer);

        // 创建行星 (题目)
        chapter.taQuestionList.forEach((problem, index) => {
            const planetWrapper = document.createElement('div');
            planetWrapper.className = 'problem-planet-wrapper';
            // 当点击行星时，跳转到对应的题目页面
            planetWrapper.onclick = () => {
                if (problem.questionUuid) {
                    window.open(`https://www.nowcoder.com/practice/${problem.questionUuid}?channelPut=quartet2025`, '_blank');
                }
            };

            const problemPlanetEl = document.createElement('div');
            // 根据解题状态和索引分配不同外观
            problemPlanetEl.className = `problem-planet type-${(index % 5) + 1} ${problem.accept ? 'solved' : 'unsolved'}`;

            const problemTitle = document.createElement('div');
            problemTitle.className = 'problem-title';
            problemTitle.textContent = problem.questionTitle;

            planetWrapper.appendChild(problemPlanetEl);
            planetWrapper.appendChild(problemTitle);

            // 新增：显示通过率
            if (problem.acceptRate) {
                const acceptRateEl = document.createElement('div');
                acceptRateEl.className = 'problem-accept-rate';
                acceptRateEl.textContent = `通过率: ${problem.acceptRate}%`;
                planetWrapper.appendChild(acceptRateEl);

                // --- 新增：根据通过率调整垂直位置 ---
                const rate = parseFloat(problem.acceptRate);
                if (!isNaN(rate)) {
                    const maxHeightOffset = 250; // 增大了最大垂直偏移量
                    // 使用幂函数使高低差异更明显
                    const marginBottom = Math.pow(rate / 100, 1.5) * maxHeightOffset;
                    planetWrapper.style.marginBottom = `${marginBottom}px`;
                }
            }
            
            // --- 新增：显示解题状态 ---
            const problemStatusEl = document.createElement('div');
            problemStatusEl.className = 'problem-status';
            if (problem.accept === true) {
                problemStatusEl.classList.add('solved-status');
                problemStatusEl.textContent = '✔ 已通过';
            } else if (problem.accept === false) {
                problemStatusEl.classList.add('unsolved-status');
                problemStatusEl.textContent = '❌ 未通过';
            }
            planetWrapper.appendChild(problemStatusEl);

            planetsContainer.appendChild(planetWrapper);
        });
    }

    // --- 新增：绘制星轨的函数 ---
    function drawOrbitPaths(chapters) {
        const svg = document.getElementById('orbit-paths');
        svg.innerHTML = ''; // 清空旧路径
        if (!chapters || chapters.length < 2) return;

        // 星球的半径 (width / 2)，用于计算中心点
        const planetRadius = 40; // 80px / 2

        // 将百分比坐标转换为像素坐标，并偏移到中心点
        const points = chapters.map(chapter => {
            const x = (parseFloat(chapter.x) / 100 * svg.clientWidth) + planetRadius;
            const y = (parseFloat(chapter.y) / 100 * svg.clientHeight) + planetRadius;
            return { x, y };
        });

        // 创建路径
        for (let i = 0; i < points.length - 1; i++) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = `M ${points[i].x} ${points[i].y} L ${points[i+1].x} ${points[i+1].y}`;
            path.setAttribute('d', d);
            path.setAttribute('class', 'orbit-line');

            // --- 新增：判断路径是否已解锁 ---
            const fromChapter = chapters[i];
            if (isChapterCompleted(fromChapter)) { // 使用辅助函数
                path.classList.add('unlocked');
            }

            svg.appendChild(path);
        }
    }

    // --- 新增：更新仪表盘的函数 ---
    function updateDashboardStats() {
        let totalChapters = 0;
        let completedChapters = 0;
        let totalProblems = 0;
        let solvedProblems = 0;

        // 修正遍历逻辑
        galaxyData.regions.forEach(region => {
            if (region.chapters) {
                totalChapters += region.chapters.length;
                region.chapters.forEach(chapter => {
                    if (isChapterCompleted(chapter)) { // 使用辅助函数
                        completedChapters++;
                    }
                    if (chapter.taQuestionList) { // 安全检查
                        totalProblems += chapter.taQuestionList.length;
                        solvedProblems += chapter.taQuestionList.filter(p => p.accept).length;
                    }
                });
            }
        });

        document.getElementById('total-chapters').textContent = totalChapters;
        document.getElementById('completed-chapters').textContent = completedChapters;
        document.getElementById('total-problems').textContent = totalProblems;
        document.getElementById('solved-problems').textContent = solvedProblems;
    }

    // 3. 绑定事件
    // backButton.addEventListener('click', switchToGalaxyView); // 移除全局监听，改为在各视图中动态设置
    
    // 4. 最后，运行程序
    renderGalaxyView();
}); 