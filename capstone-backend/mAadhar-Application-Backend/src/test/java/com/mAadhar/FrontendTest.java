package com.mAadhar;


import org.openqa.selenium.JavascriptExecutor;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;


import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class FrontendTest {
  
 
	  WebDriver wd;
		
		@BeforeMethod
		public void beforeMethod() {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\hp\\eclipse-workspace-phase5\\chromedriver_win32\\chromedriver.exe");
			wd = new ChromeDriver();
		}
		@Test
		public void AutomateFrontend() {
			wd.get("http://localhost:4200/home");
	  		wd.manage().window().maximize();
	  		
	  		JavascriptExecutor js = (JavascriptExecutor) wd;
	  		Long loadtime = (Long)((JavascriptExecutor)wd).executeScript(
	  				"return performance.timing.loadEventEnd - performance.timing.navigationStart;");
	  		System.out.println("Load Time is :"+loadtime);
	  		
	  		
	  		js.executeScript("scrollBy(0, 2500)");
	  	  
	  	  
//	  	  :- Check the frequency at which the content will be refreshed while scrolling
	  	  		try {
	  	  			long lastHeight=((Number)js.executeScript("return document.body.scrollHeight")).longValue();
	  	  			while (true) {
	  	  				((JavascriptExecutor) wd).executeScript("window.scrollTo(0, document.body.scrollHeight);");
	  	  				Thread.sleep(2000);

	  	  				long newHeight = ((Number)js.executeScript("return document.body.scrollHeight")).longValue();
	  	  				if (newHeight == lastHeight) {
	  	  					break;
	  	  				}
	  	  				lastHeight = newHeight;
	  	  			}
	  	  		} catch (InterruptedException e) {
	  	  			e.printStackTrace();
	  	  		}
		}
  
}
