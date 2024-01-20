// In components/TabsComponent.tsx
import React from 'react';
import { Tabs, Tab } from 'nextra/components';

interface TabInfo {
    model: string;
    max_tokens: number;
    messages: Array<{ role: string; content: string }>;
}

interface TabsComponentProps {
    tabsData: TabInfo[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabsData }) => {
    const renderCodeBlock = (tab: TabInfo) => {
        return `
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
    model="${tab.model}",
    messages=${JSON.stringify(tab.messages, null, 4)},
    temperature=1,
    max_tokens=${tab.max_tokens},
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
)
        `;
    };

    return (
        <Tabs items={tabsData.map(tab => tab.model)}>
            {tabsData.map((tab, index) => (
                <Tab key={index}>
                    <pre><code data-language="python">{renderCodeBlock(tab)}</code></pre>
                </Tab>
            ))}
        </Tabs>
    );
};

export default TabsComponent;
