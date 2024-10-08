using System;
using System.Collections.Generic;
using System.Text;

class Kata
{
    public static string SendMessage(string message)
    {
        StringBuilder result = new StringBuilder();
        int previousKey = -4;
        int currentKey = -3;
        char currentVal = ' ';
        bool Upper = false;

        Dictionary<int, string> keyPad = new Dictionary<int, string>
      {
          {1, ".,?!"}, {2, "abc"}, {3, "def"},
          {4, "ghi"}, {5, "jkl"}, {6, "mno"},
          {7, "pqrs"}, {8, "tuv"}, {9, "wxyz"},
          {'*', "'-+="}, {0, " "}, {'#', "case"}
      };

        for (int i = 0; i < message.Length; i++)
        {
            currentVal = message[i];
            //upperCase
            if (char.IsUpper(currentVal) && !Upper)
            {
                Upper = true;
                result.Append("#");
                previousKey = '#';
            }//Switch to lowerCAse
            if (char.IsLower(currentVal) && Upper)
            {
                Upper = false;
                result.Append("#");
                previousKey = '#';
            }
            //Numeric cases  (<o>.<o>)" for press and hold 
            else if (char.IsDigit(currentVal) || currentVal == '#' || currentVal == '*') //Allow Num, '#', and '*'
            {
                if ((currentVal - '0') == previousKey || (currentVal == '*'))// if cast [i] to int == prevkey for this case ||
                {//                                      Expects "2 2-#3 3-";     C.WL(SendMessage("a2D3"))        <=======||
                    if (result.Length > 0)
                    {
                        if (char.IsDigit(currentVal) && result[result.Length - 1] != '-')
                        {
                            result.Append(' ');//append space only if it's a num and a numeric char case
                        }
                    }
                    //append space when it's a '*'?, last key entred is also '*'?, and last char in message wasn't a press and hold '*'.
                    if (currentVal == '*' && previousKey == '*' && message[i - 1] != '-')
                    {
                        result.Append(' ');
                    }
                }
                // allow rest of the cases for click and hold 
                result.Append(currentVal);
                result.Append("-");
                //assign prevKey the right value for the next iteration
                previousKey = currentVal == '*' ? '*' : currentVal - '0';
                continue;//exit loop
            }
            
            //Spaces case
            else if (currentVal == ' ')
            {
                //try to check if the string got value to skip first round for this case ==> "       "  expected ==> "0 0 0 0 0"
                    if(result.Length > 0)
                    {
                        if (result[result.Length - 1] == '0')
                        {
                            result.Append(' ');
                        }
                    }
                result.Append(0);
                previousKey = 0;
                continue;
            }
            //Mapping loop to identify key and append typing based on number of keys clicked
            foreach (KeyValuePair<int, string> kvp in keyPad)
            {
                if (kvp.Value.Contains(Char.ToLower(currentVal)))
                {
                    currentKey = kvp.Key;//save current key
                    int index = kvp.Value.IndexOf(Char.ToLower(message[i])); // bring the indexOf the char you found on my keyPad
                    if (currentKey == previousKey)//only when currentKey == PreviousKey
                    {//append space if last char added to result isnt '-' as a hold to a key on the Keypad 
                        try
                        {
                            if (result[result.Length - 1] != '-')
                            {
                                result.Append(" ");
                            }
                        }
                        catch (IndexOutOfRangeException) { }
                    }
                    //use the saved index of the current value to prent it the number of clicks the user entered
                    for (int j = 0; j <= index; j++)
                    {
                        if (currentKey == '*')
                        {
                            result.Append('*');
                        }
                        else
                        {
                            result.Append(currentKey);
                        }
                    }
                    previousKey = currentKey;
                    break;
                }
            }
        }
        return result.ToString();
    }
}


class Programm
{
    static void Main(string[] args)
    {
        Console.WriteLine(Kata.SendMessage("Hello World!"));
        Console.WriteLine(Kata.SendMessage("a2D3"));
        Console.WriteLine(Kata.SendMessage("      "));
        Console.WriteLine(Kata.SendMessage("hihihihi"));
        Console.WriteLine(Kata.SendMessage("MoeEzzEldin"));
        Console.WriteLine(Kata.SendMessage("LoLoLOLO"));
        Console.WriteLine(Kata.SendMessage("!@#$^^&**"));
        Console.WriteLine(Kata.SendMessage("0 0 0 0 0 0"));
    }
}
