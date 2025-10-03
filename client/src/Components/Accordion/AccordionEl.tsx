import type { AccordionProps } from "../Types/Types"

export const AccordionEl = ({isOpen, onToggle, question, answer1, answer2}: AccordionProps) => {
  return (
    <div className="accordion__element">
      <button className={`accordion__btn ${isOpen ? "accordion__btn--active" : ""}`} onClick={onToggle} type="button">
        <span className="accordion__btn-text">{question}</span>
        <span className="accordion__btn-icon"></span>
      </button>
      <div className="accordion__content">
        <div className="accordion__inner">
          <div className="accordion__text">
            <p>{answer1}</p>
            <p>{answer2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}