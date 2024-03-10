import React from "react";
import CardWithAvatar from "../CardWithAvatar/CardWithAvatar";
import Assistant1 from '../../public/images/assistants/adam.webp'
import Assistant2 from '../../public/images/assistants/brahim.webp'
import Assistant3 from '../../public/images/assistants/sara.webp'
import Assistant4 from '../../public/images/assistants/sophia.webp'

const functions = [
  [
    "Personalization and segmentation options.",
    "A/B testing for optimized performance.",
    "Scheduling and automation features.",
    "Compliance with email marketing best practices.",
  ],
  [
    "  AI-powered content generation for stunning presentations.",
    "Customizable templates for various industries.",
    "Automatic formatting and layout optimization.",
    "Multimedia suggestions for engaging slides.",
    "Integration with popular presentation software.",
  ],
  [
    "    AI-powered technical documentation generation.",
    "Intelligent note-taking and summarization.",
    "Voice-to-text transcription for meetings.",
    "Integration with project management tools.",
    "Task prioritization and deadline reminders.",
  ],
  [
    "  AI-generated visuals for marketing campaigns.",
    "Direct sharing on social media platforms.",
    "Branding consistency across marketing materials.",
    "Targeted marketing recommendations.",
    "A/B testing and analytics for content performance.",
  ],
];

export default function CardsWithAvatarSection() {
  return (
    <div className="container pt--80 pb--100">
      <div className="row row-15">
        <CardWithAvatar
          title="Adam "
          description="Email Marketing Assistant"
          imageUrl={Assistant1}
          buttonUrl="https://artisan.co/ava-sales-rep/"
          functions={functions[0]}
        />
        <CardWithAvatar
          title="Sophia"
          description="Slide Maker Assistant"
          imageUrl={Assistant4}
          buttonUrl="https://example.com/link2"
          functions={functions[1]}
        />
        <CardWithAvatar
          title="Brahim"
          description="Project Management Assistant"
          imageUrl={Assistant2}
          buttonUrl="https://example.com/link3"
          functions={functions[2]}
        />
        <CardWithAvatar
          title="Sara"
          description="YMarketer Assistant"
          imageUrl={Assistant3}
          buttonUrl="https://example.com/link3"
          functions={functions[3]}
        />
      </div>
    </div>
  );
}
