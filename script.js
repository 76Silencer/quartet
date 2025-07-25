document.addEventListener('DOMContentLoaded', () => {
    // 1. 首先，获取所有DOM元素和变量
    const galaxyContainer = document.getElementById('galaxy-container');
    const dynamicContent = document.getElementById('dynamic-content'); // 获取新的动态容器
    const header = document.querySelector('header');
    const backButton = document.getElementById('back-to-galaxy');
    const orbitPaths = document.getElementById('orbit-paths'); // 获取 a orbit paths element

    // galaxyData 变量已由 data.js 引入到全局，可直接使用

    // 2. 定义所有功能函数

    // Wrapper function to clear orbits before switching to galaxy view
    function switchToGalaxyView() {
        orbitPaths.innerHTML = ''; // Clear orbits first
        renderGalaxyView();
    }

    function renderGalaxyView() {
        dynamicContent.innerHTML = ''; // 只清空动态容器
        galaxyContainer.style.backgroundImage = '';
        galaxyContainer.className = 'galaxy-view';
        header.classList.remove('hidden'); // 不再使用opacity，而是移除hidden类
        backButton.classList.add('hidden');

        // 直接使用全局变量 galaxyData
        galaxyData.regions.forEach(regionData => {
            const regionEl = document.createElement('div');
            regionEl.className = 'region';
            if (regionData.image) {
                regionEl.style.backgroundImage = `url('${regionData.image}')`;
            }
            // Object.assign(regionEl.style, { ...regionData.position, transform: regionData.position.transform || 'translateY(-50%)' });
            
            const titleEl = document.createElement('div');
            titleEl.className = 'region-title';
            // Multi-line title support: replace ' - ' with a line break
            titleEl.innerHTML = regionData.name.replace(' - ', '<br/>- ');
            regionEl.appendChild(titleEl);

            if (regionData.status === 'locked') {
                regionEl.classList.add('locked');
                const lockIcon = document.createElement('div');
                lockIcon.className = 'lock-icon';
                lockIcon.textContent = '敬请期待';
                regionEl.appendChild(lockIcon);
            } else {
                regionEl.onclick = () => renderNebulaView(regionData);
            }
            dynamicContent.appendChild(regionEl); // 在动态容器中添加元素
        });
        
        // 调用新函数更新仪表盘
        updateDashboardStats();
    }

    function renderNebulaView(regionData) {
        dynamicContent.innerHTML = ''; // 只清空动态容器
        galaxyContainer.className = 'nebula-view';
        header.classList.add('hidden'); // 不再使用opacity，而是添加hidden类
        backButton.classList.remove('hidden');
        backButton.onclick = switchToGalaxyView; // Back button goes to the wrapper function

        if (regionData.image) {
            galaxyContainer.style.backgroundImage = `url('${regionData.image}')`;
        }
        
        // regionData 参数本身就包含了章节信息，直接使用即可
        regionData.chapters.forEach((chapter, index) => {
            const planetEl = document.createElement('div');
            planetEl.className = `planet ${chapter.type}`;
            planetEl.style.left = chapter.x;
            planetEl.style.top = chapter.y;

            // --- 新增：检查章节是否已完成 ---
            const isCompleted = chapter.problems.every(p => p.accept);
            if (isCompleted) {
                planetEl.classList.add('completed');
            }
            
            // --- 新增：创建并添加序号 ---
            const chapterNumberEl = document.createElement('div');
            chapterNumberEl.className = 'planet-number';
            // 根据索引计算序号 (e.g., 02, 03, ..., 18)
            chapterNumberEl.textContent = String(index + 2).padStart(2, '0');
            planetEl.appendChild(chapterNumberEl);

            const planetName = document.createElement('div');
            planetName.className = 'planet-name';
            planetName.textContent = chapter.name;
            planetEl.appendChild(planetName);

            const satelliteList = document.createElement('ul');
            satelliteList.className = 'satellite-list';
            chapter.problems.forEach(problem => {
                const satelliteItem = document.createElement('li');
                satelliteItem.textContent = problem.questionTitle;
                if (problem.accept) {
                    satelliteItem.classList.add('solved');
                }
                satelliteList.appendChild(satelliteItem);
            });
            planetEl.appendChild(satelliteList);

            // --- 行为变更：从悬浮显示列表改为点击进入太阳系 ---
            planetEl.onclick = () => renderSolarSystemView(chapter, regionData);

            dynamicContent.appendChild(planetEl); // 在动态容器中添加元素
        });

        // 调用新函数绘制星轨
        drawOrbitPaths(regionData.chapters);
    }

    // --- 新增：渲染太阳系视图的函数 ---
    function renderSolarSystemView(chapter, regionData) {
        dynamicContent.innerHTML = '';
        const svg = document.getElementById('orbit-paths');
        svg.innerHTML = ''; // Clear orbits
        galaxyContainer.className = 'solar-system-view';
        backButton.onclick = () => renderNebulaView(regionData); // Back button now returns to Nebula View

        // 创建太阳 (恒星)
        const sunEl = document.createElement('div');
        sunEl.className = 'sun';
        const chapterNumberHTML = `<div class="sun-chapter-number">${String(regionData.chapters.indexOf(chapter) + 2).padStart(2, '0')}</div>`;
        const chapterNameHTML = `<div class="sun-name">${chapter.name}</div>`;
        sunEl.innerHTML = chapterNumberHTML + chapterNameHTML;
        dynamicContent.appendChild(sunEl);

        // 创建行星轨道容器
        const planetsContainer = document.createElement('div');
        planetsContainer.className = 'planets-container';
        dynamicContent.appendChild(planetsContainer);

        // 创建行星 (题目)
        chapter.problems.forEach((problem, index) => {
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
        if (chapters.length < 2) return;

        // 将百分比坐标转换为像素坐标
        const points = chapters.map(chapter => {
            const x = parseFloat(chapter.x) / 100 * svg.clientWidth;
            const y = parseFloat(chapter.y) / 100 * svg.clientHeight;
            return { x, y };
        });

        // 创建路径
        for (let i = 0; i < points.length - 1; i++) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = `M ${points[i].x} ${points[i].y} L ${points[i+1].x} ${points[i+1].y}`;
            path.setAttribute('d', d);
            path.setAttribute('class', 'orbit-line');

            // --- 新增：判断路径是否已解锁 ---
            // 如果路径的起点行星已完成，则认为该路径已解锁
            const fromChapter = chapters[i];
            if (fromChapter.problems.every(p => p.accept)) {
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

        galaxyData.regions.forEach(region => {
            if (region.chapters) {
                totalChapters += region.chapters.length;
                region.chapters.forEach(chapter => {
                    const allProblemsInChapterSolved = chapter.problems.every(p => p.accept);
                    if (allProblemsInChapterSolved) {
                        completedChapters++;
                    }
                    totalProblems += chapter.problems.length;
                    solvedProblems += chapter.problems.filter(p => p.accept).length;
                });
            }
        });

        document.getElementById('total-chapters').textContent = totalChapters;
        document.getElementById('completed-chapters').textContent = completedChapters;
        document.getElementById('total-problems').textContent = totalProblems;
        document.getElementById('solved-problems').textContent = solvedProblems;
    }

    // 3. 绑定事件
    backButton.onclick = switchToGalaxyView;
    
    // 4. 最后，运行程序
    renderGalaxyView();
}); 