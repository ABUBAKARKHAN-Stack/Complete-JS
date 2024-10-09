const policyCardHTML = `
<div class="grid 2xl:gap-0 gap-2 lg:grid-cols-3 2xl:grid-cols-4">
  <div class="1stCard p-4 bg-[#fefefe] h-[150px] 2xl:border-r border-gray-100 flex gap-6 justify-start items-center">
    <div>
      <img src="/images/truck.svg" alt="truck" class="w-9">
    </div>
    <div class="flex flex-col justify-center w-full">
      <p class="text-sm tracking-widest">Worldwide Shipping</p>
      <p class="text-xs tracking-widest">On Orders Over $100</p>
    </div>
  </div>

  <div class="2ndCard p-4 bg-[#fefefe] h-[150px] 2xl:border-r border-gray-100 flex gap-6 justify-start items-center">
    <div>
      <img src="/images/return.svg" alt="return" class="w-8">
    </div>
    <div class="flex flex-col justify-center w-full">
      <p class="text-sm tracking-widest">Easy 30-Day Returns</p>
      <p class="text-xs tracking-widest">Return Within 7 Days</p>
    </div>
  </div>

  <div class="3rdCard p-4 bg-[#fefefe] h-[150px] 2xl:border-r border-gray-100 flex gap-6 justify-start items-center">
    <div>
      <img src="/images/moneyback.svg" alt="moneyback" class="w-9">
    </div>
    <div class="flex flex-col justify-center w-full">
      <p class="text-sm tracking-widest">Money-Back Guarantee</p>
      <p class="text-xs tracking-widest">Within 30 Days</p>
    </div>
  </div>

  <div class="4thCard p-4 bg-[#fefefe] h-[150px] flex gap-6 justify-start items-center">
    <div>
      <img src="/images/service.svg" alt="service" class="w-9">
    </div>
    <div class="flex flex-col justify-center w-full">
      <p class="text-sm tracking-widest">24/7 Online Support</p>
      <p class="text-xs tracking-widest">Anytime, Anywhere</p>
    </div>
  </div>
</div>
`
const policyElem = document.querySelector('.policyElem')
policyElem.insertAdjacentHTML('afterbegin' , policyCardHTML)