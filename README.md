# Core JS conditions and loops task

:warning: **Please note that you mustn't open PRs that contains the answers to this repo!**

However, PRs with the fixes or proposals are welcomed!

## Task

The task is to implement functions on different Core JS topics. This module requires solving tasks related to loops and conditions.

**Active usage of [documentation](https://developer.mozilla.org/en-US/) is strongly recommended!**

## Prepare and test

1. Install Node.js
2. Fork this repository: https://github.com/rolling-scopes-school/core-js-conditions-n-loops-tasks
3. Clone your newly created repo: `https://github.com/<%your_github_username%>/core-js-conditions-n-loops-tasks/`
4. Go to folder `core-js-conditions-n-loops-tasks`
5. To install all dependencies use `npm install`
6. Each task is usually a regular function:

   ```javascript
   /**
    * Returns the maximum of three numbers.
    * In this task, the use of methods of the Array class is not allowed.
    *
    * @param {number} a
    * @param {number} b
    * @param {number} c
    * @return {number}
    *
    * @example:
    *  1, 2, 3       => 3
    *  -5, 0, 5      => 5
    *  -0.1, 0, 0.2  => 0.2
    */
   function getMaxNumber(/* a, b, c */) {
     throw new Error('Not implemented');
   }
   ```

   Read the task description in the comment above the function. Try to understand the idea. You can see the tests prepared if you don't understand it.

7. Write your code in `src/conditions-n-loops-tasks.js`.

   Uncomment the incoming parameters:

   ```javascript
   function getMaxNumber(/* a, b, c */)
   ```

   Remove the throwing error line from function body:

   ```javascript
   throw new Error('Not implemented');
   ```

   Implement the function by any way and verify your solution by running tests until the failed test become passed (green).

8. Save the solution and run `npm test` in command line. If everything is OK you can try to resolve the next task.

## Submit to [rs app](https://app.rs.school/)

1. Commit and push your solutions to your fork
2. Open [rs app](https://app.rs.school/) and login
3. Go to [submit task page](https://app.rs.school/course/submit-task?course=rs-2023-q4)
4. Select your task (Core JS Conditions-n-loops)
5. Press submit button and enjoy

## Notes

- We recommend you to use nodejs of version 16 or lower. If you using any of features that does not supported by node `v16`, score won't be submitted.
- Installing nodejs `v16` is optional, you can run jobs using your version and not use methods that are not in nodejs `v16`.
- Please be sure that each of your test in limit of 30sec.
- You will get 0 (zero) if you have any eslint's errors or warnings.

## Obfuscated Functions in the Test Suite

In this project, the test suite includes obfuscated functions that contain the solution to the algorithmic tasks. The purpose of obfuscation is to conceal the direct implementation details while still providing a mechanism to verify the correctness of the solution.

## Why Obfuscation?

1. **Security and Academic Integrity:**
  - Obfuscation helps protect the integrity of the test suite and prevents unauthorized access to the solution.
  - It discourages plagiarism and ensures that students engage with the problem-solving process rather than relying on pre-existing code snippets.
2. **Focus on Algorithmic Understanding:**
  - By obfuscating the functions, the emphasis is placed on understanding the underlying algorithm and logic rather than relying on pre-existing code snippets.

## FAQ

**Question:** I use Windows machine and have received a lot of errors like "Expected linebreaks to be 'LF' but found 'CRLF'". How to handle it?<br>
**Answer**:

- First, you need to install Gitbash properly: you need to choose option "Checkout as-is, commit as-is" in section "Configuring the line ending conversions". It'll let you download repos with line endings set "as-is" as well as commit. In other words, not to change them at all, because by default it converts them.
- Second, install `editorconfig` plugin to your editor. For VS Code you can find it here:
  https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

  I'll let you apply some rules when you saving your files in the repo. This plugin will use config-file `.editorconfig` that you can see in the root folder. It lets you save the file with needed line endings, trim whitespaces, etc.

- Finally, you need to apply linter's autofix feature in order to fix all linebreaks that was already changed to "CLRF":

```
$ npm run lint:fix
```

**Question:** Execution of tests "hangs" on one of them and does not display the result. What to do?<br>
**Answer**: Check your solution for an infinite loop, fix it, and rerun the test.

**Question:** The solution in the local repository succeeds and all tests are "green", but in the application some tests don't count. What to do?<br>
**Answer**: [Update your repository fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork), update the local repository from the fork, run tests and fix your solution. After fixing, resubmit your solution for testing.

**Question:** The solution in the local repository succeeds and all tests are "green", fork is up-to-date, but in the application some tests don't count. What to do?<br>
**Answer**: Some tests generate a new data set each time they run. Maybe your solution is not universal and fails in certain situations. Run the tests 3-5 times and make sure they complete successfully.

**Question:** The number of milliseconds is written in yellow or red next to the result of the individual tests. What does this mean?<br>
**Answer**: This means that your solution's speed test most likely fails on the server, but passes with you because your computer is fast enough. You need to revise the solution and improve the execution time.

**Question:** I don't trust the obfuscated code in the tests. How can I verify my solution?<br>
**Answer**: You can use tools to containerize the solution. For example, [using Docker](https://docs.docker.com/guides/language/nodejs/) you can run tests in an isolated container.

**Question:** What happens if I use the ready-made solution found in the test utilities?<br>
**Answer**: It is a violation of school policy to use an off-the-shelf solution, and you should carefully review the [section of the documentation that describes this](https://docs.rs.school/#/dismission).

---

The task based on https://github.com/mikhama/core-js-101/blob/master/src/07-conditions-n-loops-tasks.js.
