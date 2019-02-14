module.exports = (Franz) => {
    Franz.loop(() => {
        let unread_badge = document.querySelectorAll('.unread-badge');

        let direct = parseInt(unread_badge[1].getAttribute('data-badge-count'));
        let indirect = parseInt(unread_badge[0].getAttribute('data-badge-count'));

        Franz.setBadge(direct, indirect);
    });
};