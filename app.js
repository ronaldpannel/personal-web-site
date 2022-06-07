const menu = document.querySelector(".nav-list-wrapper");
const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

//navbar

hamburger.addEventListener("click", function () {
  menu.classList.toggle("nav-list-wrapper-active");

  bar1.classList.toggle("bar1-active");
  bar2.classList.toggle("bar2-active");
  bar3.classList.toggle("bar3-active");
});
//nav end

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentActiveAccordionItemHeader = document.querySelector('.accordion-item-header.active')
    if(currentActiveAccordionItemHeader && currentActiveAccordionItemHeader !== accordionItemHeader){
      currentActiveAccordionItemHeader.classList.toggle('active')
      currentActiveAccordionItemHeader.nextSibling.style.maxHeight = 0
    }



    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextSibling
    if(accordionItemHeader.classList.contains('active')){
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      
    }
    else{
      accordionItemBody.style.maxHeight = 0
    }
  });
});










