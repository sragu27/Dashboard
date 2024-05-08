var sidebar =`<div class="sidebar__container">
<div class="logo-details">
  <div class="logo_name"><h1>Logo</h1></div>
  <i class='bx bx-menu' id="btn"></i>
</div>
<ul class="nav-list">
  <li>
    <i class='bx bx-search'></i>
    <input type="text" placeholder="Search...">
  </li>
  <li>
    <a href="index.html">
      <i class='bx bx-grid-alt'></i>
      <span class="links_name">Dashboard</span>
    </a>
    <span class="tooltip">Dashboard</span>
  </li>
  <li class="dropdown">
    <a href="#">
      <i class='bx bx-user'></i>
      <span class="links_name">User</span>
      <i class='bx bx-chevron-down dropdown-icon'></i>
    </a>
    
    <ul class="dropdown-menu">
      <li><a href="user_creation.html">User Creation</a></li>
      <li><a href="user_configuration.html">User Configuration</a></li>
      <!-- Add more submenu items here -->
    </ul>
    <span class="tooltip">User</span>
  </li>
  <li>
    <a href="messages.html">
      <i class='bx bx-chat'></i>
      <span class="links_name">Messages</span>
    </a>
    <span class="tooltip">Messages</span>
  </li>
  <li>
    <a href="analytics.html">
      <i class='bx bx-pie-chart-alt-2'></i>
      <span class="links_name">Analytics</span>
    </a>
    <span class="tooltip">Analytics</span>
  </li>
  <li class="dropdown">
    <a href="#">
      <i class='bx bx-folder'></i>
      <span class="links_name">File Manager</span>
      <i class='bx bx-chevron-down dropdown-icon'></i>
    </a>
    <ul class="dropdown-menu">
      <li><a href="#">Submenu 1</a></li>
      <li><a href="#">Submenu 2</a></li>
      <!-- Add more submenu items here -->
    </ul>
    <span class="tooltip">Files</span>
  </li>
  <li>
    <a href="#">
      <i class='bx bx-cart-alt'></i>
      <span class="links_name">Order</span>
    </a>
    <span class="tooltip">Order</span>
  </li>
  <li>
    <a href="#">
      <i class='bx bx-heart'></i>
      <span class="links_name">Saved</span>
    </a>
    <span class="tooltip">Saved</span>
  </li>
  <li>
    <a href="#">
      <i class='bx bx-cog'></i>
      <span class="links_name">Setting</span>
    </a>
    <span class="tooltip">Setting</span>
  </li>
  <li class="profile">
    <div class="profile-details">
      <div class="name_job">
        <div class="name">Logout</div>
      </div>
    </div>
    <i class='bx bx-log-out' id="log_out"></i>
  </li>
</ul>

</div>`;
$("#sideBar").html(sidebar);






//main header

var header = `<div class="welcome-message">
<p>Welcome</p>
<h6>Admin</h6>
</div>`;
$("#mainHeader").html(header);



$(document).ready(function() {
  // Function to update active state of sidebar links
  function updateSidebarActiveState() {
    var currentPageUrl = window.location.href;
    $('.sidebar li a').removeClass('active').each(function() {
      var $link = $(this);
      var linkUrl = $link.attr('href');
      if (currentPageUrl.includes(linkUrl)) {
        $link.addClass('active');
      }
    });
  }

  // Initial update of active state
  updateSidebarActiveState();

  // Handle click event on sidebar links
  $('.sidebar li a').click(function(e) {
    e.preventDefault();
    var $clickedLink = $(this);
    var targetPage = $clickedLink.attr('href');
    setTimeout(function() {
      window.location.href = targetPage;
    }, 300);
    // Add active class to clicked link
    $clickedLink.addClass('active');
  });

  // Toggle sidebar when menu icon or search icon is clicked
  $('#btn, .bx-search').click(function() {
    $('.sidebar').toggleClass('open');
    menuBtnChange();
  });

  // Function to change menu icon
  function menuBtnChange() {
    var sidebar = $('.sidebar');
    var closeBtn = $('#btn');
    if (sidebar.hasClass('open')) {
      closeBtn.removeClass('bx-menu').addClass('bx-menu-alt-right');
    } else {
      closeBtn.removeClass('bx-menu-alt-right').addClass('bx-menu');
    }
  }

  // Handle logout
  $(".profile").click(function(event) {
    event.preventDefault();
    window.location.href = "login.html";
  });
});

 // drop down menu li active
 // JavaScript to handle click event on dropdown items
$(document).ready(function(){
  $(".dropdown-menu li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(this).closest(".dropdown").find(".links_name").addClass("active");
  });
});




