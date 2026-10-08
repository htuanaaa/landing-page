document.addEventListener("DOMContentLoaded", () => {
  syncConfigToDOM();
  initHeroSlider();
  initMobileMenu();
  initProductFilters();
  initModals();
  initBackToTop();
  initContactForms();
});

function syncConfigToDOM() {
  if (typeof SITE_CONFIG === "undefined") return;

  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
  };

  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    const val = getNestedValue(SITE_CONFIG, key);
    if (val !== null) {
      el.textContent = val;
    }
  });

  document.querySelectorAll("a[data-config-phone]").forEach((el) => {
    const phone = SITE_CONFIG.contact.hotline.replace(/[^0-9]/g, "");
    el.setAttribute("href", `tel:${phone}`);
  });

  document.querySelectorAll("a[data-config-zalo]").forEach((el) => {
    const zalo = SITE_CONFIG.contact.zalo.replace(/[^0-9]/g, "");
    el.setAttribute("href", `https://zalo.me/${zalo}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("a[data-config-email]").forEach((el) => {
    el.setAttribute("href", `mailto:${SITE_CONFIG.contact.email}`);
  });

  const priceTableBody = document.getElementById("price-table-body");
  if (priceTableBody && SITE_CONFIG.priceList) {
    priceTableBody.innerHTML = SITE_CONFIG.priceList
      .map(
        (item, index) => `
      <tr>
        <td><strong>${index + 1}. ${item.product}</strong></td>
        <td>${item.spec}</td>
        <td>${item.unit}</td>
        <td class="col-price">${item.priceRange}</td>
        <td>
          <button class="btn-detail-sm" onclick="openQuoteModal('${item.product}')">Báo giá ngay</button>
        </td>
      </tr>
    `
      )
      .join("");
  }
}

function initHeroSlider() {
  const slides = document.querySelectorAll(".slide-item");
  if (slides.length <= 1) return;

  let currentSlide = 0;
  let slideInterval = null;

  const showSlide = (index) => {
    slides.forEach((s) => s.classList.remove("active"));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  };

  const nextSlide = () => showSlide(currentSlide + 1);
  const prevSlide = () => showSlide(currentSlide - 1);

  const nextBtn = document.querySelector(".slider-btn.next");
  const prevBtn = document.querySelector(".slider-btn.prev");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetTimer();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetTimer();
    });
  }

  const startTimer = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };
  const resetTimer = () => {
    clearInterval(slideInterval);
    startTimer();
  };

  startTimer();
}

function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-toggle-btn");
  const navBar = document.querySelector(".main-nav-bar");

  if (toggleBtn && navBar) {
    toggleBtn.addEventListener("click", () => {
      navBar.classList.toggle("active");
      const icon = toggleBtn.querySelector("i");
      if (icon) {
        if (navBar.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });
  }

  const dropdownItems = document.querySelectorAll(".main-menu > li.has-dropdown");
  dropdownItems.forEach((item) => {
    const link = item.querySelector("a");
    link.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        item.classList.toggle("expanded");
      }
    });
  });
}

function initProductFilters() {
  const filterBtns = document.querySelectorAll(".filter-tab-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      productCards.forEach((card) => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.4s ease";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function initModals() {
  document.querySelectorAll(".site-modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest(".modal-close-btn")) {
        modal.classList.remove("open");
      }
    });
  });

  document.querySelectorAll(".btn-preview-eye").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".product-card");
      if (!card) return;
      const img = card.querySelector(".product-img-box img");
      const title = card.querySelector(".product-title")?.textContent || "Chi tiết sản phẩm";
      if (img) {
        openLightbox(img.src, title);
      }
    });
  });
}

window.openQuoteModal = function (productName = "") {
  const modal = document.getElementById("quoteModal");
  if (!modal) return;
  const inputTitle = modal.querySelector('input[name="product_interest"]');
  if (inputTitle && productName) {
    inputTitle.value = productName;
  }
  modal.classList.add("open");
};

window.closeQuoteModal = function () {
  const modal = document.getElementById("quoteModal");
  if (modal) modal.classList.remove("open");
};

window.openLightbox = function (imgSrc, title = "") {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  const imgEl = modal.querySelector(".lightbox-img-wrap img");
  const titleEl = modal.querySelector(".modal-title-text");
  if (imgEl) imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
  modal.classList.add("open");
};

function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initContactForms() {
  const forms = document.querySelectorAll(".ajax-contact-form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]')?.value;
      const phone = form.querySelector('input[name="phone"]')?.value;

      if (!phone) {
        alert("Vui lòng nhập số điện thoại để chúng tôi liên hệ!");
        return;
      }

      alert(
        `Cảm ơn Quý khách ${name ? name : ""}!\n\nChúng tôi đã tiếp nhận yêu cầu tư vấn và sẽ liên hệ lại qua số ${phone} trong vòng 10 phút.`
      );

      form.reset();
      const parentModal = form.closest(".site-modal");
      if (parentModal) {
        parentModal.classList.remove("open");
      }
    });
  });
}
