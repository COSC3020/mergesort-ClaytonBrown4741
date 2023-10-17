[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11857690&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

**QUESTION**: After looking through my code a bit more, I believe that the answer to the  
worst case scenario may be $\Theta(n^2logn)$. I believe this due to me essentially using  
an insertion sort at the bottom of the loop for mergesort, and insertion sort's worst time  
complexity is actually $n^2$ Is this the correct answer, or is it moving  
in the wrong direction? If it is wrong, could you please give me some insight into where I  
may be messing up? Thank you in advance for your help on this.

I used the following sources along with the various information from the slides to make my code:  
https://www.geeksforgeeks.org/in-place-merge-sort/  
https://www.studytonight.com/python-programs/python-program-for-iterative-merge-sort  

The $\Theta$ bound for the worst case runtime of this algorithm should be the exact same as a normal  
mergesort: $\Theta(nlogn)$. This can be seen by viewing the code that has been submitted. In the code,  
the array uses a for loop that goes through array one power of 2 at a time. Because of this, that means  
that the loop repeats log(n) number of times. After that, the code will loop through each element of the  
array at least once which means that the complexity of this section will be at *least* n number of times. However, even  
if the code has to go over more steps in the array, it will simply multiply the n by a constant value,  
which can be ignored asymptotically speaking. So in the end, the answer would simply be $\Theta(nlogn)$.  
Now, it is worth noting that there are a few notable changes in the code. The most prominent of these changes  
is the fact that it is now in-place as opposed to recursive mergesort which is not in place. Technically speaking,  
this does actually make the code slightly longer than usual, as the code cannot simply move the entries to another  
array to manipulate as they please. Instead, a sorting algorithm not too dissimilar to Insertion Sort has to be  
used on the array, which does usually take longer. From an asymptotic view-point, however, this change in time  
is not significant and therefore does not affect the answer shown above.

