import java.time.*;
import java.util.*;
import java.util.concurrent.TimeUnit;
public class type
{
    public static void main()throws InterruptedException
    {
        String []w={"Hello","Keyboard","Envelope","Hammer","Elephant","Chapel",
        "Mathematics","Boy","Girl","Horse","Congratulations","Backapck","Bicycle","Dog",
        "Lazy","Quick","Brown","Fox","Jumps","Altogether"};
        Scanner in=new Scanner(System.in);
        System.out.println("Typing Speed Counter");
        System.out.println();
        System.out.println("Do You Want to Start?\nPress Y for yes\nPress N for no");
        String yn=in.nextLine();
        if(yn.equalsIgnoreCase("y"))
        {
            System.out.println();
            System.out.print("Strating in ");
            System.out.print("3.. ");
            TimeUnit.SECONDS.sleep(1);
            System.out.print("2.. ");
            TimeUnit.SECONDS.sleep(1);
            System.out.println("1");
            TimeUnit.SECONDS.sleep(1);
            System.out.println("Lets Go!");
            System.out.println();
            TimeUnit.SECONDS.sleep(1);
            Random r=new Random();
            for(int i=0;i<=9;i++)
            {
                System.out.print(w[r.nextInt(20)]+" ");
            }
            double st=LocalTime.now().toNanoOfDay();
            System.out.println();
            String t=in.nextLine();
            double e=LocalTime.now().toNanoOfDay();
            double et= e-st;
            double s=et/1000000000.0;
            int n=t.length();
            double wpm=(int)((((double)n/5)/s*60));
            System.out.println("Your Words Per Minute is: "+(int)wpm+"!");
            System.out.println("Time Taken to Write: "+(float)s+"s");
        }
        else
        {
            System.out.println("As You Say!");
        }
    }
}