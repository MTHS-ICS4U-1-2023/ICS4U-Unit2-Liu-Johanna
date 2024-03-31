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
final class Number {

    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this ever is called
     *
     * @throws IllegalStateException
     *
     */
    private Number() {
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
        final Stack numbers = new Stack();
        numbers.push("One");
        numbers.push("Two");
        numbers.push("Three");
        System.out.println("Numbers: " + numbers.showStack());
        String removedNumber = numbers.pop();
        System.out.println("Popped number item: " + removedNumber);
        System.out.println("Numbers: " + numbers.showStack());

        System.out.println("\nDone.");
    }
}
