let futer = document.getElementById('futer');

futer.innerHTML = `
    <div class="kolona3"> <!-- OBICAN KONTAKT -->
		<div class="about-div">
			<div class="inline2-div">
				<img class="ikona2" src="Media/mail-background.png">
				<div class="inline-div">
					<h3 style="margin-top: 20px; margin-bottom: -18px;">E-mail</h3>
					<h4><a class="no-dec zoom1 menja-boju za-fon" href="mailto:jakovljevic.nemanja@outlook.com">jakovljevic.nemanja@outlook.com</a></h4>
				</div>
			</div>
		</div>
		<div class="about-div">
			<div class="inline2-div">
				<img class="ikona2" src="Media/call-background.png">
				<div class="inline-div">
					<h3 style="margin-bottom: -18px; margin-top: 15px;">Phone number</h3>
					<h4><a class="no-dec zoom1 menja-boju" href="tel:+381604339800">+381-60-433-9800</a></h4>
				</div>
			</div>
		</div>
		<div class="about-div">
			<div class="inline2-div">
				<img class="ikona2" src="Media/location-background.png">
				<div class="inline-div">
					<h3 style="margin-top: 15px; margin-bottom: -18px;">Location</h3>
					<h4><a class="no-dec zoom1 menja-boju" href="https://www.google.com/maps/place/Ниш/@43.3161735,21.85216,13z/data=!3m1!4b1!4m6!3m5!1s0x4755b0c240c81f65:0x56319fe3122ac3cd!8m2!3d43.320926!4d21.8954069!16zL20vMDFrXzlo?entry=ttu">Niš, Serbia</a></h4>
				</div>
			</div>
		</div>
	</div>
	<div class="kolona3"> <!-- SOCIJALNE MREZE -->
			<div class="social-div" id="fiverrDiv"  onmouseover="promeniSliku(4)" onmouseout="vratiSliku(4)">
				<img id="socialSlika4" class="ikona4" src="Media/social/prva4.png">
				<div class="inline2-div">
					<h4><a  class="no-dec menja-boju-zeleno" href="https://www.upwork.com/freelancers/~0105c1dd3065b98e8f">Visit my UpWork profile and look my offer.</a></h4>
				</div>
			</div>
				<div class="social-div" id="instaDiv"  onmouseover="promeniSliku(3)" onmouseout="vratiSliku(3)">
					<img id="socialSlika3" class="ikona4" src="Media/social/prva3.png">
					<div class="inline2-div"><h4><a class="no-dec" href="https://www.instagram.com/jakovljeviic___/#">Contact me on Instagram. Let's cooperate!</a></h4></div>
				</div>
			<div class="social-div" id="linkedinDiv"  onmouseover="promeniSliku(2)" onmouseout="vratiSliku(2)">
				<img id="socialSlika2" class="ikona4" src="Media/social/prva2.png">
				<div class="inline2-div">
					<h4><a  class="no-dec" href="https://www.instagram.com/jakovljeviic___/#">Reach out to me on LinkedIn.</a></h4>
				</div>
			</div>
			<div class="social-div" id="linkedinDiv">
				<img id="socialSlika1" class="ikona4" src="Media/social/github-icon-1.svg" style="filter: brightness(0) invert(1);">
				<div class="inline2-div">
					<h4><a  class="no-dec" href="https://github.com/nemanja2424">Check my GitHub.</a></h4>
				</div>
			</div>
	</div>

`;