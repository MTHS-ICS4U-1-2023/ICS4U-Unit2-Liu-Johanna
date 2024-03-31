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
final class Fruits {

    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this ever is called
     *
     * @throws IllegalStateException
     *
     */
    private Fruits() {
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
        final Stack fruits = new Stack();
        fruits.push("Mango");
        fruits.push("Kiwi");
        fruits.push("Papaya");
        System.out.println("Fruits: " + fruits.showStack());
        String removedFruit = fruits.pop();
        System.out.println("Popped fruit item: " + removedFruit);
        System.out.println("Fruits: " + fruits.showStack());

        System.out.println("\nDone.");
    }
}
