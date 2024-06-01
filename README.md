# Angular-GPT

Angular-GPT is a minimal Angular application designed to interact with GPT-based models. This application provides a simple interface to configure API settings, select models, and interact with the GPT models through a chat interface. 
> [!IMPORTANT]
> It is only a test application and is intended to demonstrate functionality; it is not meant for production use.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features
- Simple and intuitive chat interface to interact with GPT models.
- Configurable API settings for easy integration with different GPT-based models.
- Model selector to switch between different available models.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

        git clone https://github.com/yourusername/Angular-GPT.git
        cd Angular-GPT


2. **Install the dependencies:**

        npm install


3. **Run the application:**

        ng serve
   
 Navigate to \`http://localhost:4200/\` in your web browser to see the application in action.

## Usage

1. **Configure API Settings:**
    - Navigate to the API Settings component and enter your API key and endpoint.
    
2. **Select Model:**
    - Use the Model Selector component to choose the GPT model you want to interact with.

3. **Chat:**
    - Use the Chat Box component to send messages and receive responses from the selected GPT model.

## Project Structure


        Angular-GPT/
        │
        ├── .github/
        │   └── FUNDING.yml
        │
        ├── src/
        │   ├── app/
        │   │   ├── components/
        │   │   │   ├── api-settings/
        │   │   │   │   ├── api-settings.component.css
        │   │   │   │   ├── api-settings.component.html
        │   │   │   │   └── api-settings.component.ts
        │   │   │   ├── chat-box/
        │   │   │   │   ├── chat-box.component.css
        │   │   │   │   ├── chat-box.component.html
        │   │   │   │   └── chat-box.component.ts
        │   │   │   ├── model-selector/
        │   │   │   │   ├── model-selector.component.css
        │   │   │   │   ├── model-selector.component.html
        │   │   │   │   └── model-selector.component.ts
        │   │   ├── services/
        │   │   │   ├── api.service.ts
        │   │   │   └── chat.service.ts
        │   │   ├── app.component.css
        │   │   ├── app.component.html
        │   │   ├── app.component.ts
        │   │   └── app.module.ts
        │   └── assets/
        │
        ├── README.md
        ├── package.json




## Creator
Boris T. (14 Years old)
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
