public class MainProgram {
    public static void main(String[] args) {
        System.out.print("Cel mai mare divizor comun este: ");
        int x = 0;
        int y = 0;
        if (args.length > 1) {
            x = Integer.parseInt(args[0]);
            y = Integer.parseInt(args[1]);  
        }
        System.out.println(Util.cmmdc(x, y));
    }
}

class Util {
    public static int cmmdc(int x, int y) {
        if (x == 0 || y == 0) {
            return 0;
        }
        while (x != y) {
            if (x > y) {
                x -= y;
            } else {
                y -= x;
            }
        }	
        return x;
    }
}
