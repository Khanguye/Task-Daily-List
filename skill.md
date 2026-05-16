# Skill: Algorithm Animation HTML Pages

## Purpose

Create standalone HTML pages that teach data structure and algorithm operations with:

- An interactive animation UI
- Editable example input
- Step-by-step controls
- Clear approach explanation
- Pseudocode
- Running time and space complexity

The project homepage, `index.html`, dynamically lists HTML files from the GitHub repository. New pages should be committed and pushed so they appear on the homepage.

## Current Project Pages

- `gravity.html`: Interactive gravity environment.
- `PrintLots.html`: Prints elements in linked list `L` at positions listed in sorted linked list `P`.
- `SwapAdjElement.html`: Swaps adjacent linked-list nodes by changing links, not data.
- `UnionLinkedList.html`: Animates union and intersection of two sorted linked lists.
- `FindElementInSingleLinkList.html`: Finds an element in a singly linked list using iterative and recursive approaches.

## Page Requirements

Each algorithm page should be a complete standalone `.html` file with inline CSS and JavaScript.

Required sections:

- Page title with the algorithm name
- Short problem statement
- Editable input controls
- Animation area
- `Run Animation`, `Step`, and `Reset` buttons
- Approach explanation for each case
- Pseudocode
- Running time comparison
- Space complexity when relevant

## UI Pattern

Use a two-column layout on desktop:

- Left side: simulator and animation controls
- Right side: explanation, pseudocode, and complexity

Use a single-column layout on smaller screens.

Recommended visual elements:

- Linked-list nodes as rounded boxes
- Arrows between nodes
- Highlight current node or pointer
- Fade skipped or already-checked nodes
- Use a green style for found, printed, or completed nodes
- Use a message area to explain the current animation step

## Animation Pattern

Use these controls:

- `Run Animation`: reset state and advance steps with `setInterval`
- `Step`: advance one operation manually
- `Reset`: rebuild the animation from the current input

Keep animation state in simple variables such as:

- Current index or cursor
- Output list
- Step counter
- Current mode or case
- Timer handle

Stop the animation when:

- The target operation is complete
- A list cursor reaches the end
- The element is found or confirmed missing

## Algorithm Explanation Pattern

For each case, explain the procedure with numbered steps.

Example:

1. Start at the head node.
2. Compare the current value with the target.
3. If it matches, return or print the node.
4. Otherwise move to the next link.
5. Stop when the current pointer becomes `null`.

Mention whether the algorithm changes:

- Node links
- Node data
- Output list
- Cursor positions

## Complexity Pattern

Always include:

- Best-case time when helpful
- Worst-case time
- Extra space

Common linked-list notes:

- Scanning one list once is `O(N)`.
- Scanning two sorted lists with two cursors is `O(N + M)`.
- Changing a fixed number of links after finding nodes is `O(1)`.
- Iterative linked-list search uses `O(1)` extra space.
- Recursive linked-list search uses `O(N)` call-stack space in the worst case.

## Dynamic Homepage Behavior

`index.html` loads the root repository contents from:

`https://api.github.com/repos/Khanguye/Task-Daily-List/contents/?ref=master`

It lists every root-level `.html` file except `index.html`.

When adding a new page:

1. Create the new `.html` file in the repository root.
2. Commit it.
3. Push to `master`.
4. The homepage will list it automatically after GitHub serves the updated contents.

## Naming Convention

Use descriptive PascalCase filenames for algorithm pages.

Examples:

- `PrintLots.html`
- `SwapAdjElement.html`
- `UnionLinkedList.html`
- `FindElementInSingleLinkList.html`

## Implementation Rules

- Keep pages dependency-free unless a library is necessary.
- Prefer plain HTML, CSS, and JavaScript.
- Keep all page code in the page file.
- Do not rely on a build step.
- Do not swap linked-list node data when the task asks to use links only.
- Make examples editable through input fields.
- Make the animation understandable even when stepping manually.

## Git Workflow

After creating or changing pages:

1. Check status: `git status --short`
2. Stage files: `git add <files>`
3. Commit with a clear message.
4. Push: `git push origin master`
