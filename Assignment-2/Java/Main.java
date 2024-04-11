
/*
 * This program finds max run
 *
 * @author  Johanna Liu
 * @version 1.0
 * @since   2024-03-01
 */

import java.util.Scanner;

/**
 * This is the MaxRun program.
 */

final class Main {

    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this is ever called
     *
     * @throws IllegalStateException if this is ever called
     *
     */
    private Main() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * Finds maxRun.
     *
     * @param userInput get userInput.
     * @return maxRun
     */

    public static int maxRun(String userInput) {
        int recentRun = 0;
        int maxRun = 0;

        for (int counter = 0; counter < userInput.length() - 1; counter++) {
            if (userInput.charAt(counter) == userInput.charAt(counter + 1)) {
                recentRun++;
                if (recentRun > maxRun) {
                    maxRun = recentRun;
                }
            } else {
                recentRun = 1;
            }
        }
        return maxRun;
    }

    /**
     * Get user input.
     *
     * @param args no arguments used.
     *
     */

    public static void main(String[] args) {
        // Input
        final Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a random string: ");
        final String userInput = scanner.nextLine().trim();

        if (userInput.length() < 0) {
            System.out.print("Invalid Input");
        } else {
            final int repeated = maxRun(userInput);
            System.out.print("The max run is " + repeated + ".");
        }
        System.out.print("\nDone.");
    }
}
