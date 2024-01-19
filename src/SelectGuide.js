import React from "react";
export default function SelectGuide({ guides, value, guideSelected }) {
    function onGuideChange(event) {
        const guide_id = parseInt(event.target.value);
        const newGuide = guides.reduce((prev, guide) => guide.id === guide_id ? guide : prev);
        guideSelected(newGuide);
    }

    const options = guides.map((guide) => {
        return <option value={guide.id} key={guide.id}>{guide.name}</option>
    });

    return (
        <select key="guide" id="guide" value={value.id} onChange={onGuideChange}>
            {options}
        </select>
    );
}
