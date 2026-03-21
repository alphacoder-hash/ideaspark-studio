export type Resource = {
  title: string;
  url: string;
  source: "GFG" | "W3Schools" | "roadmap.sh" | "LeetCode" | "YouTube" | "MDN" | "FreeCodeCamp" | "HackerRank" | "Coursera" | "CS50" | "Neetcode" | "InterviewBit" | "Javatpoint" | "TutorialsPoint" | "GitHub";
  type: "article" | "video" | "practice" | "course" | "interactive" | "roadmap";
};

export type SubTopic = {
  name: string;
  resources: Resource[];
};

export type Topic = {
  name: string;
  description: string;
  subtopics: SubTopic[];
  estimatedHours: number;
};

export type ModuleSyllabus = {
  topics: Topic[];
  totalHours: number;
};

export type Track = "MNC" | "Service";

export type ModuleStatus = "completed" | "in-progress" | "locked";

export type ModuleData = {
  name: string;
  status: ModuleStatus;
  detail: string;
  syllabus: ModuleSyllabus;
};

export type SemesterData = {
  sem: number;
  title: string;
  modules: ModuleData[];
};

export const syllabusData: Record<Track, SemesterData[]> = {
  MNC: [
    {
      sem: 1,
      title: "Foundations",
      modules: [
        {
          name: "C/C++ Programming Mastery",
          status: "completed",
          detail: "Master pointers, memory management, OOP concepts.",
          syllabus: {
            totalHours: 60,
            topics: [
              {
                name: "C Fundamentals",
                description: "Variables, data types, operators, control flow, and functions in C.",
                estimatedHours: 12,
                subtopics: [
                  {
                    name: "Variables & Data Types",
                    resources: [
                      { title: "C Data Types – GFG", url: "https://www.geeksforgeeks.org/data-types-in-c/", source: "GFG", type: "article" },
                      { title: "C Tutorial – W3Schools", url: "https://www.w3schools.com/c/c_data_types.php", source: "W3Schools", type: "article" },
                      { title: "C Programming Full Course", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0", source: "YouTube", type: "video" },
                    ],
                  },
                  {
                    name: "Control Flow (if/else, loops, switch)",
                    resources: [
                      { title: "Decision Making in C – GFG", url: "https://www.geeksforgeeks.org/decision-making-c-cpp/", source: "GFG", type: "article" },
                      { title: "C Conditions – W3Schools", url: "https://www.w3schools.com/c/c_conditions.php", source: "W3Schools", type: "article" },
                      { title: "HackerRank C Practice", url: "https://www.hackerrank.com/domains/c", source: "HackerRank", type: "practice" },
                    ],
                  },
                  {
                    name: "Functions & Recursion",
                    resources: [
                      { title: "Functions in C – GFG", url: "https://www.geeksforgeeks.org/functions-in-c/", source: "GFG", type: "article" },
                      { title: "Recursion in C – TutorialsPoint", url: "https://www.tutorialspoint.com/cprogramming/c_recursion.htm", source: "TutorialsPoint", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Pointers & Memory Management",
                description: "Deep dive into pointers, dynamic memory, and memory layout.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Pointers Fundamentals",
                    resources: [
                      { title: "Pointers in C – GFG", url: "https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/", source: "GFG", type: "article" },
                      { title: "C Pointers – W3Schools", url: "https://www.w3schools.com/c/c_pointers.php", source: "W3Schools", type: "article" },
                      { title: "Pointers in C Explained", url: "https://www.youtube.com/watch?v=zuegQmMdy8M", source: "YouTube", type: "video" },
                    ],
                  },
                  {
                    name: "Dynamic Memory (malloc, calloc, free)",
                    resources: [
                      { title: "Dynamic Memory in C – GFG", url: "https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/", source: "GFG", type: "article" },
                      { title: "Memory Allocation – TutorialsPoint", url: "https://www.tutorialspoint.com/cprogramming/c_memory_management.htm", source: "TutorialsPoint", type: "article" },
                    ],
                  },
                  {
                    name: "Pointer Arithmetic & Arrays",
                    resources: [
                      { title: "Pointer Arithmetic – GFG", url: "https://www.geeksforgeeks.org/pointer-arithmetics-in-c-with-examples/", source: "GFG", type: "article" },
                      { title: "Arrays & Pointers – Javatpoint", url: "https://www.javatpoint.com/c-array-of-pointers", source: "Javatpoint", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Object-Oriented C++",
                description: "Classes, inheritance, polymorphism, templates, and STL.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "Classes & Objects",
                    resources: [
                      { title: "C++ Classes – GFG", url: "https://www.geeksforgeeks.org/c-classes-and-objects/", source: "GFG", type: "article" },
                      { title: "C++ OOP – W3Schools", url: "https://www.w3schools.com/cpp/cpp_oop.asp", source: "W3Schools", type: "article" },
                      { title: "C++ Full Course", url: "https://www.youtube.com/watch?v=8jLOx1hD3_o", source: "YouTube", type: "video" },
                    ],
                  },
                  {
                    name: "Inheritance & Polymorphism",
                    resources: [
                      { title: "Inheritance in C++ – GFG", url: "https://www.geeksforgeeks.org/inheritance-in-c/", source: "GFG", type: "article" },
                      { title: "Polymorphism – W3Schools", url: "https://www.w3schools.com/cpp/cpp_polymorphism.asp", source: "W3Schools", type: "article" },
                    ],
                  },
                  {
                    name: "STL (Vectors, Maps, Sets, Algorithms)",
                    resources: [
                      { title: "C++ STL Guide – GFG", url: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/", source: "GFG", type: "article" },
                      { title: "C++ STL Cheat Sheet", url: "https://www.geeksforgeeks.org/cpp-stl-cheat-sheet/", source: "GFG", type: "article" },
                      { title: "STL Full Tutorial", url: "https://www.youtube.com/watch?v=RRVYpIET_RU", source: "YouTube", type: "video" },
                    ],
                  },
                ],
              },
              {
                name: "Practice & Projects",
                description: "Solidify fundamentals through structured practice.",
                estimatedHours: 13,
                subtopics: [
                  {
                    name: "C/C++ Practice Problems",
                    resources: [
                      { title: "C Practice – HackerRank", url: "https://www.hackerrank.com/domains/c", source: "HackerRank", type: "practice" },
                      { title: "C++ Practice – HackerRank", url: "https://www.hackerrank.com/domains/cpp", source: "HackerRank", type: "practice" },
                      { title: "C++ Roadmap", url: "https://roadmap.sh/cpp", source: "roadmap.sh", type: "roadmap" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Git & GitHub Workflow",
          status: "completed",
          detail: "Version control, branching, pull requests, open source.",
          syllabus: {
            totalHours: 20,
            topics: [
              {
                name: "Git Fundamentals",
                description: "Core version control concepts and daily workflow.",
                estimatedHours: 8,
                subtopics: [
                  {
                    name: "Init, Add, Commit, Status, Log",
                    resources: [
                      { title: "Git Tutorial – W3Schools", url: "https://www.w3schools.com/git/", source: "W3Schools", type: "article" },
                      { title: "Git & GitHub Crash Course", url: "https://www.youtube.com/watch?v=RGOj5yH7evk", source: "YouTube", type: "video" },
                      { title: "Git Handbook – GitHub", url: "https://docs.github.com/en/get-started/using-git", source: "GitHub", type: "article" },
                    ],
                  },
                  {
                    name: "Branching & Merging",
                    resources: [
                      { title: "Git Branching – GFG", url: "https://www.geeksforgeeks.org/git-branch/", source: "GFG", type: "article" },
                      { title: "Learn Git Branching (Interactive)", url: "https://learngitbranching.js.org/", source: "FreeCodeCamp", type: "interactive" },
                    ],
                  },
                ],
              },
              {
                name: "GitHub & Collaboration",
                description: "Pull requests, code reviews, and open source contribution.",
                estimatedHours: 8,
                subtopics: [
                  {
                    name: "Pull Requests & Code Review",
                    resources: [
                      { title: "Creating a Pull Request – GitHub Docs", url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests", source: "GitHub", type: "article" },
                      { title: "How to Contribute to Open Source", url: "https://opensource.guide/how-to-contribute/", source: "GitHub", type: "article" },
                    ],
                  },
                  {
                    name: "GitHub Actions & CI/CD Basics",
                    resources: [
                      { title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", source: "GitHub", type: "article" },
                      { title: "CI/CD Explained", url: "https://www.youtube.com/watch?v=scEDHsr3APg", source: "YouTube", type: "video" },
                    ],
                  },
                ],
              },
              {
                name: "Git Best Practices",
                description: "Commit conventions, .gitignore, and workflows.",
                estimatedHours: 4,
                subtopics: [
                  {
                    name: "Conventional Commits & Workflows",
                    resources: [
                      { title: "Git Flow – GFG", url: "https://www.geeksforgeeks.org/git-flow-vs-github-flow/", source: "GFG", type: "article" },
                      { title: "Git Best Practices", url: "https://roadmap.sh/best-practices/git", source: "roadmap.sh", type: "roadmap" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "First Project: CLI Tool",
          status: "in-progress",
          detail: "Build a command-line tool and publish on GitHub.",
          syllabus: {
            totalHours: 25,
            topics: [
              {
                name: "Project Planning",
                description: "Choose a project idea, define scope, and plan implementation.",
                estimatedHours: 5,
                subtopics: [
                  {
                    name: "Project Ideas & Scoping",
                    resources: [
                      { title: "Beginner C++ Projects – GFG", url: "https://www.geeksforgeeks.org/cpp-projects/", source: "GFG", type: "article" },
                      { title: "Build Projects Roadmap", url: "https://roadmap.sh/projects", source: "roadmap.sh", type: "roadmap" },
                    ],
                  },
                ],
              },
              {
                name: "CLI Development",
                description: "Build command-line interfaces with argument parsing and file I/O.",
                estimatedHours: 12,
                subtopics: [
                  {
                    name: "Argument Parsing & File I/O",
                    resources: [
                      { title: "File I/O in C++ – GFG", url: "https://www.geeksforgeeks.org/file-handling-c-classes/", source: "GFG", type: "article" },
                      { title: "C++ File Handling – W3Schools", url: "https://www.w3schools.com/cpp/cpp_files.asp", source: "W3Schools", type: "article" },
                    ],
                  },
                  {
                    name: "Error Handling & Edge Cases",
                    resources: [
                      { title: "Exception Handling C++ – GFG", url: "https://www.geeksforgeeks.org/exception-handling-c/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Publishing & Documentation",
                description: "Write README, add license, publish to GitHub.",
                estimatedHours: 8,
                subtopics: [
                  {
                    name: "README & Documentation",
                    resources: [
                      { title: "How to Write a Great README", url: "https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/", source: "FreeCodeCamp", type: "article" },
                      { title: "Choose a License", url: "https://choosealicense.com/", source: "GitHub", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      sem: 2,
      title: "DSA Deep Dive",
      modules: [
        {
          name: "Arrays, Strings & Hashing",
          status: "locked",
          detail: "200+ problems across platforms.",
          syllabus: {
            totalHours: 80,
            topics: [
              {
                name: "Arrays & Two Pointers",
                description: "Master array manipulation, sliding window, and two-pointer techniques.",
                estimatedHours: 25,
                subtopics: [
                  {
                    name: "Array Basics & Manipulation",
                    resources: [
                      { title: "Arrays in DSA – GFG", url: "https://www.geeksforgeeks.org/array-data-structure/", source: "GFG", type: "article" },
                      { title: "Neetcode Arrays Roadmap", url: "https://neetcode.io/roadmap", source: "Neetcode", type: "roadmap" },
                      { title: "DSA Roadmap", url: "https://roadmap.sh/datastructures-and-algorithms", source: "roadmap.sh", type: "roadmap" },
                    ],
                  },
                  {
                    name: "Sliding Window & Two Pointers",
                    resources: [
                      { title: "Sliding Window – GFG", url: "https://www.geeksforgeeks.org/window-sliding-technique/", source: "GFG", type: "article" },
                      { title: "Two Pointers – LeetCode Patterns", url: "https://leetcode.com/tag/two-pointers/", source: "LeetCode", type: "practice" },
                      { title: "Sliding Window Explained", url: "https://www.youtube.com/watch?v=MK-NZ4hN7rs", source: "YouTube", type: "video" },
                    ],
                  },
                  {
                    name: "Practice: Top 50 Array Problems",
                    resources: [
                      { title: "LeetCode Array Problems", url: "https://leetcode.com/tag/array/", source: "LeetCode", type: "practice" },
                      { title: "InterviewBit Arrays", url: "https://www.interviewbit.com/courses/programming/arrays/", source: "InterviewBit", type: "practice" },
                    ],
                  },
                ],
              },
              {
                name: "Strings",
                description: "String manipulation, pattern matching, and common interview problems.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "String Algorithms",
                    resources: [
                      { title: "String Data Structure – GFG", url: "https://www.geeksforgeeks.org/string-data-structure/", source: "GFG", type: "article" },
                      { title: "String Problems – LeetCode", url: "https://leetcode.com/tag/string/", source: "LeetCode", type: "practice" },
                    ],
                  },
                  {
                    name: "KMP & Rabin-Karp",
                    resources: [
                      { title: "KMP Algorithm – GFG", url: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/", source: "GFG", type: "article" },
                      { title: "String Matching – TutorialsPoint", url: "https://www.tutorialspoint.com/data_structures_algorithms/string_search_algorithms.htm", source: "TutorialsPoint", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Hashing & HashMaps",
                description: "Hash tables, frequency counting, and hash-based problem solving.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "HashMap Fundamentals",
                    resources: [
                      { title: "Hashing in DSA – GFG", url: "https://www.geeksforgeeks.org/hashing-data-structure/", source: "GFG", type: "article" },
                      { title: "Hash Table – W3Schools", url: "https://www.w3schools.com/dsa/dsa_theory_hashtables.php", source: "W3Schools", type: "article" },
                      { title: "Hash Table Problems – LeetCode", url: "https://leetcode.com/tag/hash-table/", source: "LeetCode", type: "practice" },
                    ],
                  },
                ],
              },
              {
                name: "Problem Solving Sprint",
                description: "Solve 200+ curated problems across platforms.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Curated Problem Lists",
                    resources: [
                      { title: "Blind 75 – Neetcode", url: "https://neetcode.io/practice", source: "Neetcode", type: "practice" },
                      { title: "Striver's SDE Sheet", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/", source: "GFG", type: "practice" },
                      { title: "LeetCode Top Interview 150", url: "https://leetcode.com/studyplan/top-interview-150/", source: "LeetCode", type: "practice" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Trees & Graphs Basics",
          status: "locked",
          detail: "BFS, DFS, traversals, shortest paths.",
          syllabus: {
            totalHours: 60,
            topics: [
              {
                name: "Binary Trees",
                description: "Tree traversals, BST operations, and common tree problems.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "Tree Traversals (Inorder, Preorder, Postorder)",
                    resources: [
                      { title: "Tree Traversals – GFG", url: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/", source: "GFG", type: "article" },
                      { title: "Binary Tree – W3Schools", url: "https://www.w3schools.com/dsa/dsa_data_binarytrees.php", source: "W3Schools", type: "article" },
                      { title: "Tree Problems – LeetCode", url: "https://leetcode.com/tag/tree/", source: "LeetCode", type: "practice" },
                    ],
                  },
                  {
                    name: "Binary Search Trees",
                    resources: [
                      { title: "BST – GFG", url: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/", source: "GFG", type: "article" },
                      { title: "BST Visualization", url: "https://visualgo.net/en/bst", source: "FreeCodeCamp", type: "interactive" },
                    ],
                  },
                ],
              },
              {
                name: "Graph Fundamentals",
                description: "Graph representations, BFS, DFS, and shortest path algorithms.",
                estimatedHours: 25,
                subtopics: [
                  {
                    name: "BFS & DFS",
                    resources: [
                      { title: "BFS & DFS – GFG", url: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/", source: "GFG", type: "article" },
                      { title: "Graph Algorithms – W3Schools", url: "https://www.w3schools.com/dsa/dsa_algo_graphs_traversal.php", source: "W3Schools", type: "article" },
                      { title: "Graph Theory Full Course", url: "https://www.youtube.com/watch?v=09_LlHjoEiY", source: "YouTube", type: "video" },
                    ],
                  },
                  {
                    name: "Dijkstra's & Shortest Paths",
                    resources: [
                      { title: "Dijkstra's Algorithm – GFG", url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/", source: "GFG", type: "article" },
                      { title: "Shortest Path – W3Schools", url: "https://www.w3schools.com/dsa/dsa_algo_graphs_dijkstra.php", source: "W3Schools", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Practice",
                description: "Graph & tree problem sets.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Curated Problems",
                    resources: [
                      { title: "Graph Problems – LeetCode", url: "https://leetcode.com/tag/graph/", source: "LeetCode", type: "practice" },
                      { title: "Tree Problems – InterviewBit", url: "https://www.interviewbit.com/courses/programming/tree-data-structure/", source: "InterviewBit", type: "practice" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "First Hackathon",
          status: "locked",
          detail: "Participate in a 24-48hr hackathon.",
          syllabus: {
            totalHours: 15,
            topics: [
              {
                name: "Hackathon Preparation",
                description: "Find hackathons, form teams, and build quickly.",
                estimatedHours: 8,
                subtopics: [
                  {
                    name: "Finding Hackathons",
                    resources: [
                      { title: "Devfolio – Find Hackathons", url: "https://devfolio.co/hackathons", source: "GitHub", type: "article" },
                      { title: "MLH Hackathons", url: "https://mlh.io/seasons/2025/events", source: "GitHub", type: "article" },
                      { title: "Hackathon Guide", url: "https://www.geeksforgeeks.org/how-to-prepare-for-a-hackathon/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Rapid Prototyping Skills",
                description: "Build MVPs fast with the right tools.",
                estimatedHours: 7,
                subtopics: [
                  {
                    name: "MVP Development",
                    resources: [
                      { title: "How to Win a Hackathon", url: "https://www.freecodecamp.org/news/how-to-win-a-hackathon/", source: "FreeCodeCamp", type: "article" },
                      { title: "Rapid Prototyping Tools", url: "https://www.youtube.com/watch?v=TNtZABsxfDw", source: "YouTube", type: "video" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      sem: 3,
      title: "System Design Intro",
      modules: [
        {
          name: "Database Design & SQL",
          status: "locked",
          detail: "Normalization, indexing, query optimization.",
          syllabus: {
            totalHours: 50,
            topics: [
              {
                name: "SQL Fundamentals",
                description: "Queries, joins, subqueries, and aggregations.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "SQL Basics & Joins",
                    resources: [
                      { title: "SQL Tutorial – W3Schools", url: "https://www.w3schools.com/sql/", source: "W3Schools", type: "article" },
                      { title: "SQL – GFG", url: "https://www.geeksforgeeks.org/sql-tutorial/", source: "GFG", type: "article" },
                      { title: "SQL Practice – HackerRank", url: "https://www.hackerrank.com/domains/sql", source: "HackerRank", type: "practice" },
                    ],
                  },
                ],
              },
              {
                name: "Database Design",
                description: "Normalization, ER diagrams, and indexing strategies.",
                estimatedHours: 18,
                subtopics: [
                  {
                    name: "Normalization & Indexing",
                    resources: [
                      { title: "Database Normalization – GFG", url: "https://www.geeksforgeeks.org/normal-forms-in-dbms/", source: "GFG", type: "article" },
                      { title: "Indexing in Database – GFG", url: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/", source: "GFG", type: "article" },
                      { title: "SQL Roadmap", url: "https://roadmap.sh/sql", source: "roadmap.sh", type: "roadmap" },
                    ],
                  },
                ],
              },
              {
                name: "Practice",
                description: "SQL problem sets.",
                estimatedHours: 12,
                subtopics: [
                  {
                    name: "SQL Problem Sets",
                    resources: [
                      { title: "LeetCode SQL 50", url: "https://leetcode.com/studyplan/top-sql-50/", source: "LeetCode", type: "practice" },
                      { title: "SQL Practice – HackerRank", url: "https://www.hackerrank.com/domains/sql", source: "HackerRank", type: "practice" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "API Design Patterns",
          status: "locked",
          detail: "REST, GraphQL, authentication flows.",
          syllabus: {
            totalHours: 40,
            topics: [
              {
                name: "REST API Design",
                description: "HTTP methods, status codes, REST principles, and best practices.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "REST Fundamentals",
                    resources: [
                      { title: "REST API Tutorial – GFG", url: "https://www.geeksforgeeks.org/rest-api-introduction/", source: "GFG", type: "article" },
                      { title: "API Design Roadmap", url: "https://roadmap.sh/api-design", source: "roadmap.sh", type: "roadmap" },
                      { title: "REST API Explained", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM", source: "YouTube", type: "video" },
                    ],
                  },
                ],
              },
              {
                name: "Authentication & Security",
                description: "JWT, OAuth, API keys, and rate limiting.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Auth Patterns",
                    resources: [
                      { title: "JWT Authentication – GFG", url: "https://www.geeksforgeeks.org/json-web-token-jwt/", source: "GFG", type: "article" },
                      { title: "OAuth 2.0 Explained", url: "https://www.youtube.com/watch?v=ZV5yTm4pT8g", source: "YouTube", type: "video" },
                    ],
                  },
                ],
              },
              {
                name: "GraphQL Basics",
                description: "Queries, mutations, and when to use GraphQL vs REST.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "GraphQL Introduction",
                    resources: [
                      { title: "GraphQL – GFG", url: "https://www.geeksforgeeks.org/graphql/", source: "GFG", type: "article" },
                      { title: "GraphQL Roadmap", url: "https://roadmap.sh/graphql", source: "roadmap.sh", type: "roadmap" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Internship Applications",
          status: "locked",
          detail: "Apply to tier-1 companies with polished resume.",
          syllabus: {
            totalHours: 20,
            topics: [
              {
                name: "Resume & Portfolio",
                description: "Craft an ATS-friendly resume and online portfolio.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "Resume Building",
                    resources: [
                      { title: "Resume Tips for Engineers – GFG", url: "https://www.geeksforgeeks.org/how-to-build-a-resume-for-getting-into-product-based-company/", source: "GFG", type: "article" },
                      { title: "Resume Templates", url: "https://www.freecodecamp.org/news/how-to-write-a-resume-for-a-software-engineering-internship/", source: "FreeCodeCamp", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Application Strategy",
                description: "Where and how to apply for top internships.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "Internship Platforms",
                    resources: [
                      { title: "Where to Apply – GFG", url: "https://www.geeksforgeeks.org/top-10-internship-sites-for-students/", source: "GFG", type: "article" },
                      { title: "LinkedIn Job Search", url: "https://www.linkedin.com/jobs/", source: "GitHub", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      sem: 4,
      title: "Interview Prep Sprint",
      modules: [
        {
          name: "Advanced DSA: DP & Graphs",
          status: "locked",
          detail: "Dynamic programming, advanced graph algorithms.",
          syllabus: {
            totalHours: 70,
            topics: [
              {
                name: "Dynamic Programming",
                description: "1D DP, 2D DP, knapsack, LCS, and optimization problems.",
                estimatedHours: 35,
                subtopics: [
                  {
                    name: "DP Fundamentals & Patterns",
                    resources: [
                      { title: "DP Tutorial – GFG", url: "https://www.geeksforgeeks.org/dynamic-programming/", source: "GFG", type: "article" },
                      { title: "DP Patterns – LeetCode", url: "https://leetcode.com/tag/dynamic-programming/", source: "LeetCode", type: "practice" },
                      { title: "DP Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY", source: "YouTube", type: "video" },
                      { title: "Neetcode DP Roadmap", url: "https://neetcode.io/roadmap", source: "Neetcode", type: "roadmap" },
                    ],
                  },
                ],
              },
              {
                name: "Advanced Graph Algorithms",
                description: "Topological sort, MST, strongly connected components.",
                estimatedHours: 25,
                subtopics: [
                  {
                    name: "Advanced Graph Theory",
                    resources: [
                      { title: "Topological Sort – GFG", url: "https://www.geeksforgeeks.org/topological-sorting/", source: "GFG", type: "article" },
                      { title: "MST Algorithms – GFG", url: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/", source: "GFG", type: "article" },
                      { title: "Graph Problems – LeetCode", url: "https://leetcode.com/tag/graph/", source: "LeetCode", type: "practice" },
                    ],
                  },
                ],
              },
              {
                name: "Competitive Coding",
                description: "Timed practice for speed and accuracy.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "Contest Practice",
                    resources: [
                      { title: "LeetCode Contests", url: "https://leetcode.com/contest/", source: "LeetCode", type: "practice" },
                      { title: "Codeforces", url: "https://codeforces.com/", source: "HackerRank", type: "practice" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "System Design Mock Rounds",
          status: "locked",
          detail: "Practice designing scalable systems.",
          syllabus: {
            totalHours: 40,
            topics: [
              {
                name: "System Design Fundamentals",
                description: "Scalability, load balancing, caching, and databases at scale.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "Core Concepts",
                    resources: [
                      { title: "System Design Primer – GitHub", url: "https://github.com/donnemartin/system-design-primer", source: "GitHub", type: "article" },
                      { title: "System Design Roadmap", url: "https://roadmap.sh/system-design", source: "roadmap.sh", type: "roadmap" },
                      { title: "System Design – GFG", url: "https://www.geeksforgeeks.org/system-design-tutorial/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Design Case Studies",
                description: "Design URL shortener, chat system, news feed, etc.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "Popular System Design Questions",
                    resources: [
                      { title: "Design URL Shortener – GFG", url: "https://www.geeksforgeeks.org/system-design-url-shortening-service/", source: "GFG", type: "article" },
                      { title: "System Design Interview Guide", url: "https://www.youtube.com/watch?v=UzLMhqg3_Wc", source: "YouTube", type: "video" },
                      { title: "InterviewBit System Design", url: "https://www.interviewbit.com/courses/system-design/", source: "InterviewBit", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Mock Interviews x5",
          status: "locked",
          detail: "Simulate real MNC interview rounds.",
          syllabus: {
            totalHours: 25,
            topics: [
              {
                name: "Interview Preparation",
                description: "Practice behavioral and technical interviews.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Technical Interview Prep",
                    resources: [
                      { title: "Interview Preparation – GFG", url: "https://www.geeksforgeeks.org/company-preparation/", source: "GFG", type: "article" },
                      { title: "Mock Interviews – Pramp", url: "https://www.pramp.com/", source: "FreeCodeCamp", type: "interactive" },
                      { title: "Coding Interview Roadmap", url: "https://roadmap.sh/computer-science", source: "roadmap.sh", type: "roadmap" },
                    ],
                  },
                ],
              },
              {
                name: "Behavioral & HR",
                description: "STAR method, common questions, and presentation.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "Behavioral Interview Tips",
                    resources: [
                      { title: "HR Interview Questions – GFG", url: "https://www.geeksforgeeks.org/hr-interview-questions/", source: "GFG", type: "article" },
                      { title: "STAR Method Guide", url: "https://www.freecodecamp.org/news/star-interview-method/", source: "FreeCodeCamp", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  Service: [
    {
      sem: 1,
      title: "Foundations",
      modules: [
        {
          name: "Python & Scripting",
          status: "completed",
          detail: "Automate tasks, data processing basics.",
          syllabus: {
            totalHours: 50,
            topics: [
              {
                name: "Python Fundamentals",
                description: "Variables, data types, control flow, and functions.",
                estimatedHours: 18,
                subtopics: [
                  {
                    name: "Python Basics",
                    resources: [
                      { title: "Python Tutorial – W3Schools", url: "https://www.w3schools.com/python/", source: "W3Schools", type: "article" },
                      { title: "Python – GFG", url: "https://www.geeksforgeeks.org/python-programming-language-tutorial/", source: "GFG", type: "article" },
                      { title: "Python for Beginners", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc", source: "YouTube", type: "video" },
                      { title: "Python Roadmap", url: "https://roadmap.sh/python", source: "roadmap.sh", type: "roadmap" },
                    ],
                  },
                ],
              },
              {
                name: "Automation & Scripting",
                description: "File handling, web scraping, and task automation.",
                estimatedHours: 18,
                subtopics: [
                  {
                    name: "File Handling & OS Module",
                    resources: [
                      { title: "File Handling – GFG", url: "https://www.geeksforgeeks.org/file-handling-python/", source: "GFG", type: "article" },
                      { title: "Python File Handling – W3Schools", url: "https://www.w3schools.com/python/python_file_handling.asp", source: "W3Schools", type: "article" },
                    ],
                  },
                  {
                    name: "Web Scraping with BeautifulSoup",
                    resources: [
                      { title: "Web Scraping – GFG", url: "https://www.geeksforgeeks.org/implementing-web-scraping-python-beautiful-soup/", source: "GFG", type: "article" },
                      { title: "Web Scraping Tutorial", url: "https://www.freecodecamp.org/news/how-to-scrape-websites-with-python/", source: "FreeCodeCamp", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Practice",
                description: "Python coding challenges.",
                estimatedHours: 14,
                subtopics: [
                  {
                    name: "Python Practice",
                    resources: [
                      { title: "Python – HackerRank", url: "https://www.hackerrank.com/domains/python", source: "HackerRank", type: "practice" },
                      { title: "Python Exercises – W3Schools", url: "https://www.w3schools.com/python/python_exercises.asp", source: "W3Schools", type: "interactive" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Soft Skills & Communication",
          status: "completed",
          detail: "Presentation skills, email etiquette, teamwork.",
          syllabus: {
            totalHours: 20,
            topics: [
              {
                name: "Professional Communication",
                description: "Email writing, meeting etiquette, and presentation skills.",
                estimatedHours: 12,
                subtopics: [
                  {
                    name: "Business Communication",
                    resources: [
                      { title: "Communication Skills – GFG", url: "https://www.geeksforgeeks.org/7-cs-of-communication/", source: "GFG", type: "article" },
                      { title: "Effective Communication – Coursera", url: "https://www.coursera.org/courses?query=communication%20skills", source: "Coursera", type: "course" },
                    ],
                  },
                ],
              },
              {
                name: "Teamwork & Leadership",
                description: "Collaboration, conflict resolution, and leadership basics.",
                estimatedHours: 8,
                subtopics: [
                  {
                    name: "Team Collaboration Skills",
                    resources: [
                      { title: "Teamwork Skills – GFG", url: "https://www.geeksforgeeks.org/teamwork-in-software-development/", source: "GFG", type: "article" },
                      { title: "Leadership – FreeCodeCamp", url: "https://www.freecodecamp.org/news/tag/soft-skills/", source: "FreeCodeCamp", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Domain Exploration",
          status: "in-progress",
          detail: "Explore IT service verticals: consulting, support, QA.",
          syllabus: {
            totalHours: 25,
            topics: [
              {
                name: "IT Service Industry Overview",
                description: "Understand different service company verticals and roles.",
                estimatedHours: 12,
                subtopics: [
                  {
                    name: "Service Company Landscape",
                    resources: [
                      { title: "IT Service Companies Guide – GFG", url: "https://www.geeksforgeeks.org/top-it-service-based-companies/", source: "GFG", type: "article" },
                      { title: "Service vs Product Companies", url: "https://www.geeksforgeeks.org/difference-between-service-based-and-product-based-company/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Role-Specific Exploration",
                description: "Explore QA, consulting, DevOps, and support roles.",
                estimatedHours: 13,
                subtopics: [
                  {
                    name: "Career Paths in IT Services",
                    resources: [
                      { title: "QA Engineer Roadmap", url: "https://roadmap.sh/qa", source: "roadmap.sh", type: "roadmap" },
                      { title: "DevOps Roadmap", url: "https://roadmap.sh/devops", source: "roadmap.sh", type: "roadmap" },
                      { title: "IT Roles Guide – GFG", url: "https://www.geeksforgeeks.org/roles-in-software-engineering/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      sem: 2,
      title: "Domain Knowledge",
      modules: [
        {
          name: "SDLC & Agile Methodology",
          status: "locked",
          detail: "Understand project lifecycles and sprints.",
          syllabus: {
            totalHours: 30,
            topics: [
              {
                name: "Software Development Life Cycle",
                description: "Waterfall, Agile, Scrum, and Kanban methodologies.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "SDLC Models",
                    resources: [
                      { title: "SDLC – GFG", url: "https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/", source: "GFG", type: "article" },
                      { title: "SDLC – W3Schools", url: "https://www.w3schools.com/sdlc/", source: "W3Schools", type: "article" },
                      { title: "Agile Methodology – GFG", url: "https://www.geeksforgeeks.org/software-engineering-agile-development-models/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Scrum & Sprint Planning",
                description: "Roles, ceremonies, and tools in Scrum.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Scrum Framework",
                    resources: [
                      { title: "Scrum Guide – GFG", url: "https://www.geeksforgeeks.org/scrum-software-development/", source: "GFG", type: "article" },
                      { title: "Agile with Jira – Coursera", url: "https://www.coursera.org/learn/agile-with-atlassian-jira", source: "Coursera", type: "course" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "SQL & Database Management",
          status: "locked",
          detail: "Practical SQL for business data.",
          syllabus: {
            totalHours: 40,
            topics: [
              {
                name: "SQL for Service Companies",
                description: "Practical SQL queries for data analysis and reporting.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "SQL Basics to Advanced",
                    resources: [
                      { title: "SQL Tutorial – W3Schools", url: "https://www.w3schools.com/sql/", source: "W3Schools", type: "article" },
                      { title: "SQL – GFG", url: "https://www.geeksforgeeks.org/sql-tutorial/", source: "GFG", type: "article" },
                      { title: "SQL Practice – HackerRank", url: "https://www.hackerrank.com/domains/sql", source: "HackerRank", type: "practice" },
                    ],
                  },
                ],
              },
              {
                name: "Database Administration",
                description: "Backup, recovery, and performance tuning basics.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "DBA Fundamentals",
                    resources: [
                      { title: "PostgreSQL Roadmap", url: "https://roadmap.sh/postgresql-dba", source: "roadmap.sh", type: "roadmap" },
                      { title: "DBMS – GFG", url: "https://www.geeksforgeeks.org/dbms/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Aptitude & Reasoning Prep",
          status: "locked",
          detail: "Crack service company aptitude rounds.",
          syllabus: {
            totalHours: 35,
            topics: [
              {
                name: "Quantitative Aptitude",
                description: "Number systems, percentages, time & work, probability.",
                estimatedHours: 18,
                subtopics: [
                  {
                    name: "Aptitude Topics",
                    resources: [
                      { title: "Aptitude Questions – GFG", url: "https://www.geeksforgeeks.org/aptitude-questions-and-answers/", source: "GFG", type: "practice" },
                      { title: "Aptitude – Javatpoint", url: "https://www.javatpoint.com/aptitude/quantitative", source: "Javatpoint", type: "article" },
                      { title: "IndiaBIX Aptitude", url: "https://www.indiabix.com/aptitude/questions-and-answers/", source: "TutorialsPoint", type: "practice" },
                    ],
                  },
                ],
              },
              {
                name: "Logical Reasoning",
                description: "Puzzles, pattern recognition, and verbal reasoning.",
                estimatedHours: 17,
                subtopics: [
                  {
                    name: "Reasoning Practice",
                    resources: [
                      { title: "Logical Reasoning – GFG", url: "https://www.geeksforgeeks.org/puzzles/", source: "GFG", type: "practice" },
                      { title: "Verbal Reasoning – Javatpoint", url: "https://www.javatpoint.com/reasoning", source: "Javatpoint", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      sem: 3,
      title: "Specialization Track",
      modules: [
        {
          name: "Cloud Fundamentals (AWS/Azure)",
          status: "locked",
          detail: "Core cloud services and certifications.",
          syllabus: {
            totalHours: 50,
            topics: [
              {
                name: "Cloud Computing Basics",
                description: "IaaS, PaaS, SaaS, and major cloud providers.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Cloud Concepts",
                    resources: [
                      { title: "Cloud Computing – GFG", url: "https://www.geeksforgeeks.org/cloud-computing/", source: "GFG", type: "article" },
                      { title: "AWS Roadmap", url: "https://roadmap.sh/aws", source: "roadmap.sh", type: "roadmap" },
                      { title: "Cloud Computing Intro", url: "https://www.youtube.com/watch?v=mxT233EdY5c", source: "YouTube", type: "video" },
                    ],
                  },
                ],
              },
              {
                name: "AWS Core Services",
                description: "EC2, S3, Lambda, RDS, and IAM.",
                estimatedHours: 20,
                subtopics: [
                  {
                    name: "AWS Essentials",
                    resources: [
                      { title: "AWS Tutorial – GFG", url: "https://www.geeksforgeeks.org/amazon-web-services-aws-tutorial/", source: "GFG", type: "article" },
                      { title: "AWS Free Tier Labs", url: "https://aws.amazon.com/free/", source: "Coursera", type: "interactive" },
                      { title: "AWS Cloud Practitioner", url: "https://www.coursera.org/professional-certificates/aws-cloud-technology-consultant", source: "Coursera", type: "course" },
                    ],
                  },
                ],
              },
              {
                name: "Certification Prep",
                description: "Prepare for AWS Cloud Practitioner or Azure Fundamentals.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Cert Study Materials",
                    resources: [
                      { title: "AWS CCP Prep – FreeCodeCamp", url: "https://www.freecodecamp.org/news/aws-certified-cloud-practitioner-certification-study-course-pass-the-exam/", source: "FreeCodeCamp", type: "course" },
                      { title: "Azure Fundamentals – GFG", url: "https://www.geeksforgeeks.org/microsoft-azure-tutorial/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Testing & QA Practices",
          status: "locked",
          detail: "Manual and automation testing fundamentals.",
          syllabus: {
            totalHours: 40,
            topics: [
              {
                name: "Manual Testing",
                description: "Test cases, test plans, bug reporting, and STLC.",
                estimatedHours: 18,
                subtopics: [
                  {
                    name: "Testing Fundamentals",
                    resources: [
                      { title: "Software Testing – GFG", url: "https://www.geeksforgeeks.org/software-testing-tutorial/", source: "GFG", type: "article" },
                      { title: "QA Roadmap", url: "https://roadmap.sh/qa", source: "roadmap.sh", type: "roadmap" },
                      { title: "Testing – Javatpoint", url: "https://www.javatpoint.com/software-testing-tutorial", source: "Javatpoint", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Automation Testing",
                description: "Selenium, TestNG, and CI/CD integration.",
                estimatedHours: 22,
                subtopics: [
                  {
                    name: "Selenium & Automation",
                    resources: [
                      { title: "Selenium Tutorial – GFG", url: "https://www.geeksforgeeks.org/selenium-python-tutorial/", source: "GFG", type: "article" },
                      { title: "Selenium – W3Schools", url: "https://www.w3schools.com/whatis/whatis_selenium.asp", source: "W3Schools", type: "article" },
                      { title: "Selenium Full Course", url: "https://www.youtube.com/watch?v=j7VZsCCnptM", source: "YouTube", type: "video" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Certification Prep",
          status: "locked",
          detail: "Prepare for industry-recognized certifications.",
          syllabus: {
            totalHours: 30,
            topics: [
              {
                name: "Popular Certifications",
                description: "ISTQB, AWS, Azure, and CompTIA certifications.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Certification Options",
                    resources: [
                      { title: "Top IT Certifications – GFG", url: "https://www.geeksforgeeks.org/top-it-certifications/", source: "GFG", type: "article" },
                      { title: "ISTQB Prep – Javatpoint", url: "https://www.javatpoint.com/istqb", source: "Javatpoint", type: "article" },
                      { title: "CompTIA A+ – FreeCodeCamp", url: "https://www.freecodecamp.org/news/comptia-a-plus-certification/", source: "FreeCodeCamp", type: "course" },
                    ],
                  },
                ],
              },
              {
                name: "Study Plan & Mock Tests",
                description: "Structured study plan and practice exams.",
                estimatedHours: 15,
                subtopics: [
                  {
                    name: "Mock Exams",
                    resources: [
                      { title: "ISTQB Mock Test – GFG", url: "https://www.geeksforgeeks.org/istqb-quiz/", source: "GFG", type: "practice" },
                      { title: "AWS Practice Exams", url: "https://www.freecodecamp.org/news/aws-certified-cloud-practitioner-certification-study-course-pass-the-exam/", source: "FreeCodeCamp", type: "practice" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      sem: 4,
      title: "Placement Readiness",
      modules: [
        {
          name: "Group Discussion Training",
          status: "locked",
          detail: "Practice GD rounds with peers.",
          syllabus: {
            totalHours: 20,
            topics: [
              {
                name: "GD Fundamentals",
                description: "Topics, techniques, and do's & don'ts.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "GD Preparation",
                    resources: [
                      { title: "GD Tips – GFG", url: "https://www.geeksforgeeks.org/group-discussion-tips/", source: "GFG", type: "article" },
                      { title: "GD Topics – Javatpoint", url: "https://www.javatpoint.com/group-discussion-topics", source: "Javatpoint", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Practice Topics",
                description: "Current affairs, tech topics, and abstract themes.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "GD Topic List",
                    resources: [
                      { title: "GD Topics for Placement – GFG", url: "https://www.geeksforgeeks.org/most-asked-group-discussion-topics/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "HR Interview Mastery",
          status: "locked",
          detail: "Common questions, STAR method, body language.",
          syllabus: {
            totalHours: 20,
            topics: [
              {
                name: "HR Interview Preparation",
                description: "Common questions, STAR method, and salary negotiation.",
                estimatedHours: 12,
                subtopics: [
                  {
                    name: "HR Interview Questions",
                    resources: [
                      { title: "HR Interview Questions – GFG", url: "https://www.geeksforgeeks.org/hr-interview-questions/", source: "GFG", type: "article" },
                      { title: "STAR Method – FreeCodeCamp", url: "https://www.freecodecamp.org/news/star-interview-method/", source: "FreeCodeCamp", type: "article" },
                      { title: "Top HR Questions – Javatpoint", url: "https://www.javatpoint.com/hr-interview-questions", source: "Javatpoint", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Body Language & Presentation",
                description: "Non-verbal communication and confidence building.",
                estimatedHours: 8,
                subtopics: [
                  {
                    name: "Interview Presence",
                    resources: [
                      { title: "Body Language Tips", url: "https://www.youtube.com/watch?v=PCWVi5pAa30", source: "YouTube", type: "video" },
                      { title: "Interview Tips – GFG", url: "https://www.geeksforgeeks.org/tips-for-online-interview/", source: "GFG", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "Resume & Portfolio Polish",
          status: "locked",
          detail: "Final resume review and portfolio website.",
          syllabus: {
            totalHours: 20,
            topics: [
              {
                name: "Resume Finalization",
                description: "ATS-friendly resume, quantified achievements, and proofreading.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "Resume Best Practices",
                    resources: [
                      { title: "Resume Guide – GFG", url: "https://www.geeksforgeeks.org/how-to-build-a-resume-for-getting-into-product-based-company/", source: "GFG", type: "article" },
                      { title: "Resume Tips – FreeCodeCamp", url: "https://www.freecodecamp.org/news/how-to-write-a-resume-for-a-software-engineering-internship/", source: "FreeCodeCamp", type: "article" },
                    ],
                  },
                ],
              },
              {
                name: "Portfolio Website",
                description: "Build and deploy a personal portfolio site.",
                estimatedHours: 10,
                subtopics: [
                  {
                    name: "Portfolio Development",
                    resources: [
                      { title: "Portfolio Ideas – FreeCodeCamp", url: "https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/", source: "FreeCodeCamp", type: "article" },
                      { title: "Frontend Roadmap", url: "https://roadmap.sh/frontend", source: "roadmap.sh", type: "roadmap" },
                      { title: "Portfolio Templates – GitHub", url: "https://github.com/topics/portfolio-website", source: "GitHub", type: "article" },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
