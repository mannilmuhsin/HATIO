// utils/githubGist.js

import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

dotenv.config();




const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const createGist = async (title, content) => {
  try {
    const response = await octokit.gists.create({
      files: {
        [`${title.replace(/\s+/g, '_')}.md`]: { // Replace spaces with underscores
          content: content,
        },
      },
      description: `Project Summary for ${title}`, // Add a description
      public: false, // Make the gist private
    });

    return response.data.html_url; // Return the Gist URL
  } catch (error) {
    console.error("Error creating gist:", error);
    throw error;
  }
};
