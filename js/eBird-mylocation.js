const locid = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
document.getElementsByClassName("SectionMenu-section-list")[0].
    insertAdjacentHTML("beforeend", `<li>
        <a href="/targets?r1=${locid}"><strong>Target List</strong></a>
    </li>
    <li>
        <a href="/myebird/${locid}"><strong>View in my eBird</strong></a>
    </li>`)