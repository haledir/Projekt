import java.util.*;


public class main {

	public static void main(String[] args) {
		
		int zahl1=0;
		int zahl2=0;
		int zahl3=0;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Bitte geben Sie ihre erste ganze Zahl ein: ");
		zahl1 = sc.nextInt();
		System.out.print("Bitte geben Sie ihre zweite ganze Zahl ein: ");
		zahl2 = sc.nextInt();
		System.out.print("Bitte geben Sie ihre dritte ganze Zahl ein: ");
		zahl3 = sc.nextInt();
		
		if(zahl1<zahl2 && zahl2<zahl3 || zahl3<zahl2 && zahl2<zahl1)
		{
			System.out.println("Die mittlere Zahl ist: " + zahl2);
		
		}else if(zahl2<zahl1 && zahl1<zahl3 || zahl3<zahl1 && zahl1<zahl2)
			{
				System.out.println("Die mittlere Zahl ist: " + zahl1);
				
			}else if(zahl1<zahl3 && zahl3<zahl2 || zahl2<zahl3 && zahl3<zahl1)
			{
				System.out.println("Die mittlere Zahl ist: " + zahl3);
			}

	}

}