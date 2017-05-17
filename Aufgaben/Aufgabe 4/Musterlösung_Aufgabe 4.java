import java.util.*;

public class main {

	public static void main(String[] args) {
		
		int zahl1 = (int)((Math.random()) * 6 + 1);
		int zahl2 = (int)((Math.random()) * 6 + 1);
		int ergebnis = 0;
		
		if(zahl1 ==2 && zahl2 ==1 || zahl1==1 && zahl2==2)
		{
			ergebnis = 1000;
			System.out.println("Herzlichen glückwunsch Sie haben Mäxle gewürfelt! Ihre Punkte betragen: " + ergebnis);
			
		}else if(zahl1 == zahl2)
			{
				ergebnis = (zahl1+zahl2)*100;
				System.out.println("Sie haben einen " + zahl1 + " Pasch gewürfelt. Ihre Punkte betragen: " +ergebnis);
				
			}else if(zahl1<zahl2)
				{
					System.out.println("Ihre Punkte betragen: " + zahl2 + zahl1);
				}else
					{
						System.out.println("Ihre Punkte betragen: " + zahl1 + zahl2);
				
					}
			
		

	}

}
