import java.util.Scanner;

public class Cipher{
    public String encrypt(String text, int shift){
        StringBuilder result = new StringBuilder();
        for (char character: text.toCharArray()){
            if (Character.isLetter(character)){
                char base = Character.isLowerCase(character) ? 'a' : 'A';
                char shifted = (char) ((character-base+shift)%26+base);
                result.append(shifted);
            }
        }
        return result.toString();
    } 

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter text to encrypt: ");
        String input = scanner.nextLine();

        System.out.print("Enter shift key from 0-25: ");
        int shiftKey = scanner.nextInt();

        Cipher cipher = new Cipher();
        String encrypted = cipher.encrypt(input, shiftKey);
        System.out.println("encrypted text: " + encrypted);

        scanner.close();
    }
}