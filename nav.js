// Navigation module - single source of truth
function initNavigation(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const navItems = [
        { id: 'combine', label: 'Combine', href: 'index.html' },
        { id: 'compress', label: 'Compress', href: 'pdf-compress.html' },
        { id: 'split', label: 'Split', href: 'pdf-split.html' }
    ];

    const currentNav = getCurrentNav();
    const navActiveClasses = ['bg-primary', 'text-white', 'border-transparent', 'dark:text-white'];
    const navInactiveClasses = ['bg-transparent', 'border-black/15', 'dark:border-white/20', 'text-black/70', 'dark:text-white/70'];

    const navHTML = `<nav class="flex flex-wrap items-center justify-center gap-3 rounded-[24px] border border-black/10 bg-white/60 px-6 py-4 text-xs font-mono uppercase tracking-[0.3em] text-black/60 dark:border-white/10 dark:bg-white/5 dark:text-white/60">${navItems.map(item => {
        const isActive = item.id === currentNav;
        const classes = isActive ? navActiveClasses : navInactiveClasses;
        const ariaCurrent = isActive ? 'aria-current="page"' : '';
        return `<a data-nav="${item.id}" href="${item.href}" ${ariaCurrent} class="nav-link inline-flex items-center justify-center rounded-full border ${classes.join(' ')} px-4 py-2 text-[0.6rem] font-semibold tracking-[0.35em] transition-colors">${item.label}</a>`;
    }).join('')}</nav>`;

    container.innerHTML = navHTML;
}

function getCurrentNav() {
    const path = window.location.pathname;
    if (path.includes('pdf-split')) return 'split';
    if (path.includes('pdf-compress')) return 'compress';
    return 'combine';
}

