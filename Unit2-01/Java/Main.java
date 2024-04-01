/*
 * This program uses oop
 *
 * @author  Johanna Liu
 * @version 1.0
 * @since   2024-03-028
 */

/**
 * This program uses stacks.
 */
final class Main {

    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this ever is called
     *
     * @throws IllegalStateException
     *
     */
    private Main() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * Process.
     *
     * @param args No args will be used
     *
     */
    public static void main(final String[] args) {
        // input
        final Stack snack = new Stack();
        snack.push("Chips");
        snack.push("Chocolate");
        snack.push("Candy");
        System.out.println("Snacks: " + snack.showStack());

        // input
        final Stack numbers = new Stack();
        numbers.push("One");
        numbers.push("Two");
        numbers.push("Three");
        System.out.println("Numbers: " + numbers.showStack());

        // input
        final Stack fruits = new Stack();
        fruits.push("Mango");
        fruits.push("Kiwi");
        fruits.push("Papaya");
        System.out.println("Fruits: " + fruits.showStack());

        System.out.println("\nDone.");
    }
}
