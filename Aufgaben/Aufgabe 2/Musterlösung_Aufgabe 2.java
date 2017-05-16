public class main {

	public static void main(String[] args) {
		
		float ergebnis;
		float kapital = 10000;
		float zins = 5;
		float tage = 360;
		float jahr = tage/360;
		
		
		ergebnis = kapital + (jahr * (zins/100) * kapital);
		
		System.out.println("Nach " + jahr + " Jahr/en, beträgt das neue Kapital " + ergebnis + " Euro.");
		
		
		
		

	}

}