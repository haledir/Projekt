import java.util.*;

public class main {

	public static void main(String[] args) {
		
		int ergebnis = 0;
		int tage = 0;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Bitte geben Sie die Anzahl der Tage im Januar ein: ");
		tage = sc.nextInt();
		
		ergebnis = tage*24*60*60;
		
		System.out.println("Der Januar hat: " + ergebnis + " Sekunden!");
		
		

	}

}