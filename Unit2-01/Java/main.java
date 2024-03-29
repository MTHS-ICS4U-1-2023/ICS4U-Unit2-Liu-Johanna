/**
 * This program uses oop
 *
 * @author  Johanna Liu
 * @version 1.0
 * @since   2024-03-028
 */

final class Main {

    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this ever is called
     *
     * @throws IllegalStateException
     */
    private Main() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    public static void  main(final String[] args) {
        // input
        final Stack snacks = new Stack();
        snack.push("Chips");
        snack.push("Chocolate");
        snack.push("Candy");
        system.out.println("snacks:" + snack.show());
    }
}
