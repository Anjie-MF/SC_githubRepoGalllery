# GitHub Repo Gallery

A lightweight gallery that pulls data from the GitHub API and displays my public repositories in a searchable, filterable list. Visitors can quickly scan projects and click into a repo to view more details and open it on GitHub.

## Features {Deviations from the tutorial}
- Fetches GitHub profile + public repo data from the GitHub API
- Repo gallery with:
  - Search by repository name
  - Filter by primary language
  - Sort by recently updated or name (A–Z / Z–A)
- Repo details view with a direct link to GitHub
- Helpful UI states (loading, error, empty results)

## Built With
- HTML
- CSS
- JavaScript (vanilla)

## How It Works
1. The app requests user profile + repository data from the GitHub API.
2. Repositories render as cards in a gallery layout.
3. Search, language filter, and sorting update the displayed results dynamically.
4. Clicking a repository reveals additional details and a link to the GitHub repo.

