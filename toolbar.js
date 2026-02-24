document.addEventListener('DOMContentLoaded', function() {
    const toolbarHTML = `
        <nav class="main-toolbar">
            <div class="toolbar-container">
                <div class="toolbar-logo">
                    <a href="index.html"> CLB 12A4</a>
                </div>
                
                <ul class="toolbar-menu">
                    <li><a href="index.html" class="toolbar-link"><strong>Trang Chủ</strong></a></li>
                    <li><a href="thethao.html" class="toolbar-link"><strong>Thể Thao</strong></a></li>
                    <li><a href="dulichbaden.html" class="toolbar-link"><strong>Du Lịch</strong></a></li>
                </ul>
                
                <div class="toolbar-actions">
                    <a href="dangkythamgiaclb.html" class="toolbar-btn">Đăng Ký CLB</a>
                   
                </div>
                
                
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
            </div>
            
            <div class="mobile-menu">
                <a href="index.html" onclick="toggleMobileMenu()">Trang Chủ</a>
                <a href="thethao.html" onclick="toggleMobileMenu()">Thể Thao</a>
                <a href="dulichbaden.html" onclick="toggleMobileMenu()">Du Lịch</a>
                <a href="dangkythamgiaclb.html" onclick="toggleMobileMenu()">Đăng Ký CLB</a>
            </div>
        </nav>
        
        <div class="toolbar-spacer"></div>
    `;
    document.body.insertAdjacentHTML('afterbegin', toolbarHTML);
    updateActiveLink();
    addToolbarStyles();
});

function updateActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.toolbar-link');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

function showRegister() {
    alert('Chức năng đăng ký đang được phát triển!');
}

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}

function addToolbarStyles() {
    const style = document.createElement('style');
    style.textContent = `
        
        .main-toolbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(135deg, #0e64c7 0%, #2a5298 100%);
            color: white;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            padding: 0 20px;
        }
        
        .toolbar-spacer {
            height: 90px;
        }
        
        .toolbar-container {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 85px;
        }
        
        
        .toolbar-logo a {
            color: white;
            font-size: 1.8rem;
            font-weight: bold;
            text-decoration: none;
            display: flex;
            align-items: center;
        }
        
        .toolbar-logo a:hover {
            color: #4dabf7;
        }
        
        .toolbar-menu {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 30px;
        }
        
        .toolbar-link {
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: 500;
            padding: 8px 16px;
            border-radius: 6px;
            transition: all 0.3s ease;
        }
        
        .toolbar-link:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: #a5d8ff;
        }
        
        .toolbar-link.active {
            background-color: rgba(255, 255, 255, 0.2);
            color: #74c0fc;
        }
        
        .toolbar-actions {
            display: flex;
            gap: 15px;
            align-items: center;
        }
        
        .toolbar-btn {
            display: inline-block;
            color: black;
            background-color: white;
            padding: 18px 40px;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .toolbar-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            color: white;
            background: blue;
        }
        .toolber-btn:active {
            transform: translateY(1px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2)
        }
        
        .login-btn {
            background-color: transparent;
            color: white;
            border: 2px solid white;
            padding: 8px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .login-btn:hover {
            background-color: white;
            color: #1e3c72;
        }
        
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px;
        }
        
        .mobile-menu {
            display: none;
            flex-direction: column;
            background: white;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            z-index: 1000;
        }
        
        .mobile-menu.show {
            display: flex;
        }
        
        .mobile-menu a, .mobile-menu button {
            padding: 12px;
            text-decoration: none;
            color: #333;
            border: none;
            background: none;
            text-align: left;
            border-bottom: 1px solid #eee;
            cursor: pointer;
        }
        
        .mobile-menu a:hover, .mobile-menu button:hover {
            background-color: #f8f9fa;
        }
        
        @media (max-width: 768px) {
            .toolbar-menu, .toolbar-actions {
                display: none;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .toolbar-container {
                height: 60px;
            }
            
            .toolbar-spacer {
                height: 60px;
            }
            
            .mobile-menu {
                top: 60px;
            }
        }
    `;
    
    document.head.appendChild(style);
}