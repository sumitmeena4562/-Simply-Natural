// Reusable Navbar Component
function loadNavbar(activePage = 'home') {
    const pages = {
        home: 'index.html',
        store: 'store.html',
        plants: 'plants.html',
        cactus: 'Cactos.html',
        about: 'about_us.html',
        contact: 'contact_us.html',
        account: 'my_account.html'
    };

    const isActive = (page) => activePage === page ? 'active' : '';

    return `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="resource/plants-store-logo-green.svg" alt="Simply Natural Logo">
                Simply Natural
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link ${isActive('home')}" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle ${isActive('store') || isActive('plants') || isActive('cactus') ? 'active' : ''}" 
                           href="store.html" role="button" data-bs-toggle="dropdown">Store</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="store.html">All Products</a></li>
                            <li><a class="dropdown-item" href="plants.html">Plants</a></li>
                            <li><a class="dropdown-item" href="Cactos.html">Cactus</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${isActive('about')}" href="about_us.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${isActive('contact')}" href="contact_us.html">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${isActive('account')}" href="my_account.html">My Account</a>
                    </li>
                </ul>
                <div class="nav-icons d-flex align-items-center">
                    <span class="price me-2">$0.00</span>
                    <i class="fa-solid fa-bag-shopping me-2" style="color:#4CAF50;"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
        </div>
    </nav>`;
}
