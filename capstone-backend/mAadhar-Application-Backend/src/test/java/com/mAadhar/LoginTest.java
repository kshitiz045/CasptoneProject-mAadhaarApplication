package com.mAadhar;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import static org.testng.Assert.assertEquals;
public class LoginTest {

 
	  WebDriver wd;
		
		@BeforeMethod
		public void beforeMethod() {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\hp\\eclipse-workspace-phase5\\chromedriver_win32\\chromedriver.exe");
			wd = new ChromeDriver();
		}
		
	  @Test
	 
	  public void loginPageTest() {
		  wd.get("http://google.com");
		  wd.manage().window().maximize();
//		  WebElement emailIdRef = wd.findElement(By.id("n1"));
//		  WebElement passwordRef = wd.findElement(By.id("n2"));
//			emailIdRef.sendKeys("raj@gmail.com");
//			passwordRef.sendKeys("123");
//			WebElement submitButtonRef = wd.findElement(By.id("b1"));
//			submitButtonRef.click();
//			Alert alertRef	= wd.switchTo().alert();		
//			String result = alertRef.getText();		 
//			alertRef.accept();
//			assertEquals(result, "successfully login");
			
	  }
	  
	  
//
//	  @AfterMethod
//	  public void afterMethod() {
//		  wd.close();		
//	  }

	  

}
