# Third-Party Licenses & Attribution

Kaavosh separates **application source code** ([`LICENSE`](./LICENSE), MIT), **original educational content** ([`LICENSE-CONTENT.md`](./LICENSE-CONTENT.md), CC BY 4.0), and **third-party interview questions** imported into `src/data/interview-bank/*.json` for educational study.

Every imported question retains its upstream `source` field in both the JSON dataset and the rendered UI card. All rights to third-party materials remain with their respective copyright holders.

---

## Imported Interview Bank Sources

| Upstream Repository | Domain(s) in Kaavosh | Imported Count | Upstream License / Status | Repository URL |
| --- | --- | ---: | --- | --- |
| `sudheerj/reactjs-interview-questions` | React (`react.json`) | 439 | MIT License (Copyright © Sudheer Jonna) | https://github.com/sudheerj/reactjs-interview-questions |
| `sudheerj/javascript-interview-questions` | JavaScript (`javascript.json`) | 10 | MIT License (Copyright © Sudheer Jonna) | https://github.com/sudheerj/javascript-interview-questions |
| `yangshun/tech-interview-handbook` | Behavioral (`behavioral.json`) | 8 | MIT License (Copyright © Yangshun Tay) | https://github.com/yangshun/tech-interview-handbook |
| `donnemartin/system-design-primer` | System Design (`system-design.json`) | 8 (shared curation) | CC BY 4.0 (Copyright © Donne Martin) | https://github.com/donnemartin/system-design-primer |
| `ashishps1/awesome-system-design-resources` | System Design (`system-design.json`) | 8 (shared curation) | GNU GPLv3 (Copyright © Ashish Pratap Singh) | https://github.com/ashishps1/awesome-system-design-resources |
| `greatfrontend/top-reactjs-interview-questions` | React (`react.json`) | 50 | ISC License (GreatFrontEnd) | https://github.com/greatfrontend/top-reactjs-interview-questions |
| `greatfrontend/top-javascript-interview-questions` | JavaScript (`javascript.json`) | 193 | Upstream repo lacks root `LICENSE` file — see note below | https://github.com/greatfrontend/top-javascript-interview-questions |
| `Devinterview-io/*` (60 topic repositories) | Algorithms, Backend, DevOps/Cloud, AI/ML, Mobile, System Design, Frontend, Behavioral, Cybersecurity | 1,016 | Public GitHub study repos by DevInterview (see note below) | https://github.com/Devinterview-io |

### Upstream Licensing Notes

1. **MIT / ISC / CC BY 4.0 Repositories:** Original copyright holders and repository URLs are preserved here and on each rendered question card. Full upstream license texts are available directly in each linked repository (`LICENSE` / `package.json`).
2. **Repositories Without an Explicit Root License File (`greatfrontend/top-javascript-interview-questions`, `Devinterview-io/*`):** These questions are included with explicit source attribution strictly for non-commercial educational study and personal interview preparation. Before any commercial redistribution, verify upstream permission or replace those entries with original authored content.
3. **GPLv3 Reference (`ashishps1/awesome-system-design-resources`):** The 8 curated entries in `system-design.json` referencing both `system-design-primer` and `awesome-system-design-resources` should be reviewed or rewritten as original summaries if strict non-copyleft licensing is required for all bundled JSON datasets.

---

## Devinterview-io Topic Repositories Referenced

All repositories under `https://github.com/Devinterview-io/`:

- **AI / ML:** `llms-interview-questions`, `llmops-interview-questions`, `deep-learning-interview-questions`, `nlp-interview-questions`
- **Algorithms & Data Structures:** `data-structures-interview-questions`, `dynamic-programming-interview-questions`, `hash-table-data-structure-interview-questions`, `binary-tree-data-structure-interview-questions`, `linked-list-data-structure-interview-questions`, `graph-data-structure-interview-questions`, `array-data-structure-interview-questions`, `heap-and-map-data-structures-interview-questions`, `string-data-structure-interview-questions`, `trie-data-structure-interview-questions`, `sorting-algorithms-interview-questions`, `greedy-algorithms-interview-questions`, `divide-and-conquer-interview-questions`, `backtracking-algorithms-interview-questions`, `recursion-algorithm-interview-questions`, `fibonacci-sequence-interview-questions`, `big-o-notation-interview-questions`, `stack-data-structure-interview-questions`, `queue-data-structure-interview-questions`, `searching-algorithms-interview-questions`, `tree-data-structure-interview-questions`, `bit-manipulation-interview-questions`
- **Backend:** `node-interview-questions`, `java-interview-questions`, `golang-interview-questions`, `oop-interview-questions`, `api-design-interview-questions`, `databases-interview-questions`, `express-interview-questions`, `django-interview-questions`, `caching-interview-questions`, `concurrency-interview-questions`, `mongodb-interview-questions`, `layering-and-middleware-interview-questions`, `dependency-injection-interview-questions`, `redis-interview-questions`, `sql-interview-questions`, `websocket-interview-questions`
- **Frontend:** `css-interview-questions`, `html5-interview-questions`, `typescript-interview-questions`, `vue-interview-questions`
- **DevOps & Cloud:** `git-interview-questions`, `aws-interview-questions`, `load-balancing-interview-questions`, `availability-and-reliability-interview-questions`, `devops-interview-questions`, `docker-interview-questions`, `kubernetes-interview-questions`, `azure-interview-questions`
- **Mobile:** `flutter-interview-questions`, `android-interview-questions`, `kotlin-interview-questions`, `react-native-interview-questions`, `swift-interview-questions`
- **System Design:** `cap-theorem-interview-questions`, `microservices-interview-questions`, `software-architecture-interview-questions`, `service-oriented-architecture-interview-questions`, `domain-driven-design-interview-questions`
- **Cybersecurity:** `web-security-interview-questions`, `cryptography-interview-questions`
- **Behavioral:** `behavioral-junior-interview-questions`, `behavioral-senior-interview-questions`, `behavioral-managerial-interview-questions`, `behavioral-staff-interview-questions`

---

## Open-Source Software Dependencies

Runtime and build dependencies are declared in [`package.json`](./package.json) (Next.js, React, Tailwind CSS, Motion, next-intl, Lucide React, TypeScript) and retain their respective MIT / Apache-2.0 / ISC licenses.
