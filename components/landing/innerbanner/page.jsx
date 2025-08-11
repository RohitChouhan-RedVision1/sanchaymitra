import React from 'react'

const InnerBanner = ({title}) => {
  return (
    <div>
      <section class="inner-banner-modern">
		<div class="circle circle1"></div>
		<div class="circle circle2"></div>
		<div class="circle circle3"></div>
		<div class="banner-box-modern max-w-screen-xl  text-center mx-auto ">
			<h4 class="banner-heading">{title}</h4>
			
		</div>
	</section>
    </div>
  )
}

export default InnerBanner
