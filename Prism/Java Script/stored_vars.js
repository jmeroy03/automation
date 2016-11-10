// ****************** GLOBAL VALUES ********************* //

	//Base domains
		storedVars['environment']	= "qaprism";
	
	//default download folder
		storedVars['defaultFolderDownload']	=	'C:\\Users\\edsel.q\\Downloads';

	//Base domains for IMS
		storedVars['ims_environment']	= "http://qaims.aprintingpress.com";	
		storedVars['prism_environment']	= "http://qaprism.digitalroom.com";	

	// Login Credentials for Prepress user

		storedVars['prepress_email']			= "ppress.automation";
		storedVars['prepress_pass']				= "prepress12345";

	// Login Credentials

		storedVars['email']				= "edsel.q@gmail.com";
		storedVars['pass']				= "";
		
	// Login Credentials in IMS

		storedVars['ims_email']				= "dri.automation";
		storedVars['ims_pass']				= "AUTO@qa098";


	// Login Credentials


		storedVars['email2']			= "selenium.testemail55@gmail.com";
		storedVars['pass2']				= "dritesting";

	// Commerical Shipping Address
		storedVars['name']				= "John Lovie Too";
		storedVars['company']			= "DRI Test Corporation";
		storedVars['address1']			= "34145 Pacific Coast Highway";
		storedVars['apt']				= ""
		storedVars['city']				= "Dana Point";
		storedVars['state']				= "automatically inputted";
		storedVars['zipcode']			= "92629";
		storedVars['phone']				= 1111111111;

	//SAVED CC Profile
		//storedVars['profileIDQA']			= "6400";
		storedVars['profileIDQA']			= "6910";

	// Credit Card Credentials
		storedVars['credit']			= "4112344112344113";
		storedVars['cvc']				= "411";

	// Credit Card Credentials
		storedVars['paypal_user']		= "paypal_dev-buyer@digitalroominc.com";
		storedVars['paypal_pass']		= "paypaldev1";

	//Directory for image uploads
		storedVars['upload_image_path1'] = 'C:\\Gallery_Selenium_Test\\images\\selenium.pdf';
		storedVars['upload_image_path2'] = 'C:\\Gallery_Selenium_Test\\images\\selenium.jpg';
		storedVars['upload_image_path3'] = 'C:\\Gallery_Selenium_Test\\images\\selenium.xls'; // invalid image file

	//Save directory for Mailing List
		storedVars['mailing_path'] 		= 'C:\\Gallery_Selenium_Test\\source_files\\Mailing-500.xls';

	//Save directory for Calendar Locator file
		storedVars['calendar_path'] 	= 'file://C:/Gallery_Selenium_Test/source_files/calendar.csv';

	//Save directory for Product Locator file
		//Column 1 for PME, Column 2 for PC
		storedVars['product_path'] 		= 'file://C:/Gallery_Selenium_Test/source_files/products.csv';

	// Compute Date
		d = new Date(); 
		m = ((d.getMonth()+1)<10)?'0'+(d.getMonth()+1):(d.getMonth()+1);

		storedVars['date']	= m+"-"+d.getDate()+"-"+d.getFullYear()+"_"+d.getHours()+"-"+d.getMinutes();




// ****************** SITES ********************* //


	//Account Credentials
		storedVars['first_name']		= "Selenium";
		storedVars['full_name']			= "Selenium Test";


	// ~~~~~~~~~~~~~~ BUSINESSCARDS24.COM ~~~~~~~~~~~~~~~~~~ //


		//Save directory for screenshots
			storedVars['save_image_path_bc24'] = 'C:\\Gallery_Selenium_Test\\screenshots\\captured\\BC24\\';

			storedVars['customer_id']		= "2981207";  // Customer id of BC24 account email used in "email" variable


	// ~~~~~~~~~~~~~~ POSTCARDS.COM ~~~~~~~~~~~~~~~~~~ //

		//Save directory for screenshots
			storedVars['save_image_path_pc'] 	= 'C:\\Gallery_Selenium_Test\\screenshots\\captured\\PC\\';

			storedVars['pc_customer_id']		= 3385016; // customer id used in email2 account


	// ~~~~~~~~~~~~~~ PRINTSMADEEASY.COM ~~~~~~~~~~~~~~~~~~ //


		//Save directory for screenshots
			storedVars['save_image_path_pme'] 	= 'C:\\Gallery_Selenium_Test\\screenshots\\captured\\PME\\';

			//LOGIN ELEMENTS

				//Locators
					storedVars['sign_in'] 			= 'css=span.caption';
					storedVars['login_form'] 		= 'css=div.signin-left-area';
						storedVars['login_email'] 		= 'id=email';
						storedVars['login_password']	= 'id=password';
						storedVars['login_button'] 		= 'id=btn_login';

					storedVars['sign_out'] 			= 'link=Sign Out';
					storedVars['user_name'] 		= 'css=span.caption > a';


			//HOMEPAGE ELEMENTS

				//Locators
					storedVars['pme_logo'] 			= 'css=a';
					storedVars['search'] 			= 'id=header_search';
					storedVars['user_name']			= 'css=span.caption > a';
					storedVars['account_dropdown']	= 'css=div.useraccount-state-dropdown';
					storedVars['right_nav']			= 'css=ul.right-nav-links';
					storedVars['product_nav']		= 'css=div.productnav-container > ul';
					storedVars['h1']				= 'css=h1';
					storedVars['account_header']	= 'css=div.header-content';
					storedVars['light_footer']		= 'css=div.light-footer-container';


			storedVars['pc_customer_id']	= "3385016";

	
	// ~~~~~~~~~~~~~~ YOUPRINT.COM ~~~~~~~~~~~~~~~~~~ //


		//Save directory for screenshots
			storedVars['save_image_path_yp'] = 'C:\\Gallery_Selenium_Test\\screenshots\\captured\\YP\\';



	// ~~~~~~~~~~~~~~ YOUPRINTLABELS.COM ~~~~~~~~~~~~~~~~~~ //


		//Save directory for screenshots
			storedVars['save_image_path_ypl'] = 'C:\\Gallery_Selenium_Test\\screenshots\\captured\\YPL\\';

			storedVars['ypl_customer_id']	= "2740602";