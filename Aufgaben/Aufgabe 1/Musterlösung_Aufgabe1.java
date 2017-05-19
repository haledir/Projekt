public class main {

	public static void main(String[] args) {
		
		float flaeche;
		float umfang;
		float pi = 3.141f;
		float radius = 4.2f;
		
		flaeche = pi * (radius*radius);
		umfang = 2 * pi * radius;
		
		System.out.println("Die Fläche beträgt: " + flaeche);
		System.out.println("Der Umfang beträgt: " + umfang);
		
	}

}