document.addEventListener("DOMContentLoaded", () => {
    const addNoteBtn = document.getElementById("addNoteBtn");
    const stickyNotesContainer = document.getElementById("stickyNotesContainer");
  
    // Add new sticky note
    addNoteBtn.addEventListener("click", () => {
      const stickyNote = createStickyNote();
      stickyNotesContainer.appendChild(stickyNote);
    });
  
    // Function to create a new sticky note
    function createStickyNote() {
      const stickyNote = document.createElement("div");
      stickyNote.classList.add("sticky-note");
  
      const textarea = document.createElement("textarea");
      textarea.placeholder = "Write your note here...";
  
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "×";
  
      // Add event to delete sticky note
      deleteBtn.addEventListener("click", () => {
        stickyNote.remove();
      });
  
      stickyNote.appendChild(textarea);
      stickyNote.appendChild(deleteBtn);
  
      return stickyNote;
    }
  });
  