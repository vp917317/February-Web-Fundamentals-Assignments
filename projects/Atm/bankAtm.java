package Atm;

import java.util.ArrayList;

class person{
    String name;
    int pin;
    int acc_no;
    int balance;

    public person(String name,int pin,int acc_no,int balance){
        this.name=name;
        this.acc_no=acc_no;
        this.pin=pin;
        this.balance=balance;

    }
}

class Bank {
    ArrayList<person>accounts; 

    public Bank(){
        accounts = new ArrayList<>();
    }
    public void withdraw(person p , int enteres_pin,int amount){
           if(enteres_pin==p.pin){
            if(p.balance<amount){
                System.out.println("Entered amount is not available , the current balance is "+p.balance);
            }else{
                p.balance=p.balance-amount;
                System.out.println("Amount withdrawl "+amount +" current balance is "+p.balance);
            }
           } else{
                System.out.println("You entered woring pin please try again");
           }
    }

    public void withdraw(String name,int enteres_pin,int amount,int x){
      
        person p =null;

        for(int i=0;i<accounts.size();i++){
            person curr = accounts.get(i);

            if(curr.name.equals(name) && curr.acc_no==x){
                p=curr;
                break;
            }
        }

        if(p==null){
            System.out.println("There is no data of such name");
        } 

        withdraw(p , enteres_pin, amount);
    }

    public void deposit(person p , int enteres_pin , int amount){
   
        if(enteres_pin!=p.pin){
            System.out.println("please enter correct pin");
        } else{

       p.balance = p.balance+amount;

       System.out.println("Deposit succesfull the current amount is "+p.balance);

        }
    }

    public void deposit(String name , int enteres_pin , int x , int amount){
       person p = null;

       for(int i=0;i<accounts.size();i++){
        person curr = accounts.get(i);

        if(curr.name.equals(name) && curr.acc_no==x){
            p=curr;
            break;
        } 
       }

       if(p==null){
        System.out.println("No record founds of such user");
       }

       deposit(p, enteres_pin, amount);
     }

    public void bank_bal(person p , int enteres_pin){
            if(enteres_pin==p.pin){
                System.out.println("Your avaialable balanace is "+ p.balance);
            } else{
                System.out.println("You entered wrong pin , please enter again");
            }
    }

    public void changePin(person p , int enteres_pin, int newPin){
        if(enteres_pin==p.pin){
            p.pin= newPin;
            System.out.println("Your pin changed current pin is "+p.pin);
        } else{
            System.out.println("your entered wron old pin");
        }

    }
}


public class bankAtm {
    public static void main(String[] args) {
        Bank guna = new Bank();

        person p1 = new person("vishal",000,123456,100000);

        guna.accounts.add(p1);

        person p2 = new person("Saloni",001,123457,1000);

        guna.accounts.add(p2);

        //guna.withdraw(p1, 000, 70000);

        guna.deposit("Saloni", 001, 123457 , 1000);

        guna.changePin(p2, 001, 1234);
        guna.bank_bal(p2, 1244);
       
    }
}
