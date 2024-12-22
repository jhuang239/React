import { EXAMPLES } from "../../data.js";
import TabButton from "./TapButton.jsx";
import { useState } from "react";
import Section from "../Section.jsx";
import Tabs from "../Tabs.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    function handleTabClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id="examples">
            <h2>Examples</h2>
            <Tabs
                // ButtonsContainer="div"
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onClick={() => handleTabClick("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleTabClick("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onClick={() => handleTabClick("props")}>
                            Props
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onClick={() => handleTabClick("state")}>
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
