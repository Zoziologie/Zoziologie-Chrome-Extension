document.getElementsByClassName("SectionMenu-section-list")[0].
    insertAdjacentHTML("beforeend", `<li>
        <a href="/targets?r1=${window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}">Target List</a>
    </li>`)