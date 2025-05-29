---
id: generative-ai
title: Guidelines for Generative AI
sidebar:
  label: Generative AI Guidelines
---

Axioned supports responsible experimentation with generative AI tools, but there are some important considerations for us to keep in mind when using these tools, including information security and data privacy and compliance.

In using ChatGPT or other generative AI tools, team members must be aware of their limits and apply best practices to their use:

1. **Protect confidential data:** You should not enter data classified, confidential or personal data including non-public code, into publicly-available generative AI tools.
   - There may be some cases where anonymizing or removing/redacting sensitive information could work. Otherwise, avoid sharing sensitive information.
   - Examples of data that should not be disclosed include:
     - Client, products and services (all of which fall under NDAs)
     - Personal information (such as contact details, personal information)
     - Confidential information related to business data including any Intellectual Properties
     - Non-sanitised code blocks
2. **Managing Privacy:** Information shared with these generative AI tools using default settings is not private and could expose proprietary or sensitive information to unauthorized parties.
   - Please follow the documentation to turn-off the settings which consent to using your chats for training purposes.
   - **ChatGPT** ([Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq))
       - All chats on ChatGPT Plus or ChatGPT Free plan are set to be used for training purposes as a default, and you should **turn this off by going to Settings > Data Controls > DISABLE "Improve the model for everyone"**.
         <img width="400" alt="Screenshot 2025-04-02 at 17 05 01" src="https://github.com/user-attachments/assets/266bf2af-5f8d-43d4-aa2e-ba03fbff2ca3" />
       - Use **"Temporary Chats"** when necessary; they won’t be used for model training.
         <img width="400" alt="Screenshot 2025-04-02 at 17 03 39" src="https://github.com/user-attachments/assets/7cf3d6ee-e072-4c4f-800c-9450047e66b5" />
       - If you don't use **"Temporary Chats"**, then delete prior chats frequently for "privacy hygeine" purposes.
       - To test your ability to keep ChatGPT conversations private, test ChatGPT's memory: Prompt ChatGPT with questions about your prior chats to see if "deletion" has really taken place.
       - Note: The use of their API Platform doesn’t post any direct concern - as they are not used to train their models. (See [Enterprise privacy](https://openai.com/enterprise-privacy/))
   - **GitHub Copilot** ([Managing Copilot policies as an individual subscriber](https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-prompt-and-suggestion-collection))
     - By default, your prompts and Copilot's suggestions are collected and retained by GitHub, and further processed and shared with Microsoft.
     - **Deselect** the “Allow GitHub to use my code snippets from the code editor for product improvements.” from your [GitHub Copilot settings](https://github.com/settings/copilot).
3. **You are responsible for any content that you produce or publish that includes AI-generated material:** AI-generated content can be inaccurate, misleading, or entirely fabricated (sometimes called “hallucinations”), or may contain copyrighted material. Review your AI-generated content before publication.
4. **Be alert for AI-related phishing or malicious plugins:** Generative AI has made it easier for malicious actors to create sophisticated scams. Continue to follow security best practices and report suspicious messages to <security@axioned.com>.

Following these guidelines will help us maintain the security and confidentiality of our information while leveraging AI tools effectively.
