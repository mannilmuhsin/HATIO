import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

dotenv.config();

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const createGist = async (title, content) => {
  try {
    const response = await octokit.gists.create({
      files: {
        [`${title.replace(/\s+/g, "_")}.md`]: {
          content: content,
        },
      },
      description: `Project Summary for ${title}`,
      public: false,
    });

    return response.data.html_url;
  } catch (error) {
    console.error("Error creating gist:", error);
    throw error;
  }
};
