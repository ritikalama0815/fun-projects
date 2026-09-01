import javax.swing.*;

public class GUI {
    public static void main(String[] args) {
        JFrame frame = new JFrame("My GUI");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        
        frame.setLayout(null); //absolute positioning
        frame.setVisible(true);

        JTextField textField = new JTextField();
        textField.setBounds(50, 50, 200, 30);

        JButton button = new JButton("click me");
        button.setBounds(50, 100, 100, 30);

        JLabel label = new JLabel("hello!");
        label.setBounds(50, 150, 200, 30);

        frame.add(textField);
        frame.add(button);
        frame.add(label);

        button.addActionListener(e -> {
            String text = textField.getText();
            label.setText("hello " + text);
        });
    }
}