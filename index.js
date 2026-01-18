document.addEventListener('DOMContentLoaded', () => {

    const menuLinks = document.querySelectorAll('.menu a');
    if (menuLinks.length) {
        const currentPath = location.pathname.toLowerCase();

        menuLinks.forEach(link => {
            const href = link.getAttribute('href')?.toLowerCase();
            if (href && currentPath.includes(href)) {
                link.classList.add('active');
            }
        });
    }

    if (document.body) {
        document.body.classList.add('show');
    }

    const allLinks = document.querySelectorAll('a');
    if (allLinks.length) {
        allLinks.forEach(link => {
            link.addEventListener('click', e => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('#')) {
                    e.preventDefault();
                    document.body.classList.remove('show');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                }
            });
        });
    }

    const tabsContainer = document.querySelector('.tabs');
    const planetsWrapper = document.querySelector('.planets');

    if (tabsContainer && planetsWrapper) {

        const planetsData = [
            { id: 'moon', label: 'MOON', active: true },
            { id: 'mars', label: 'MARS' },
            { id: 'europa', label: 'EUROPA' },
            { id: 'titan', label: 'TITAN' }
        ];

        planetsData.forEach(planet => {
            const btn = document.createElement('button');
            btn.dataset.target = planet.id;
            btn.textContent = planet.label;
            if (planet.active) btn.classList.add('active');
            tabsContainer.appendChild(btn);
        });

        const tabs = tabsContainer.querySelectorAll('button');
        const planets = planetsWrapper.querySelectorAll('div');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {

                tabs.forEach(t => t.classList.remove('active'));
                planets.forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                const target = planetsWrapper.querySelector(`#${tab.dataset.target}`);
                if (target) target.classList.add('active');
            });
        });
    }

    const crewTabs = document.querySelectorAll('.tab');
    const crewPeople = document.querySelectorAll('.people');

    if (crewTabs.length && crewPeople.length) {

        crewTabs.forEach(tab => {
            tab.addEventListener('click', () => {

                crewTabs.forEach(t => t.classList.remove('active'));
                crewPeople.forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                const target = document.getElementById(tab.dataset.target);
                if (target) target.classList.add('active');
            });
        });


        const firstPerson = crewPeople[0];
        const firstTab = crewTabs[0];
        if (firstPerson) firstPerson.classList.add('active');
        if (firstTab) firstTab.classList.add('active');
    }

    const techButtons = document.querySelectorAll('.change button');
    const techImages = document.querySelectorAll('.space-image');

    if (techButtons.length && techImages.length) {

        techButtons.forEach(button => {
            button.addEventListener('click', () => {

                techImages.forEach(img => img.classList.remove('active'));
                techButtons.forEach(btn => btn.classList.remove('active'));

                const target = document.getElementById(button.dataset.target);
                if (target) target.classList.add('active');
                button.classList.add('active');
            });
        });


        techImages[0]?.classList.add('active');
        techButtons[0]?.classList.add('active');
    }

});
