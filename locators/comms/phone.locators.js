const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function HomePage() {
    return select('scorpion-layout-dashboard')
}

function SearchBtn() {
    return select('[data-cy=button-search]')
}

function RowSearchBtn() {
    return select('tbody[role="rowgroup"]')
}

function ArrowRightBtn() {
    return select('[aria-label="arrow_right"]')
}

function ClearSearch() {
    return select('[aria-label="Clear"]')
}

function FilterBtn() {
    return select('button').withText('Filter')
}

function CancelBtn() {
    return select('[data-cy=cancel-button]')
}

function MakeCallBtn() {
    return select('[data-cy=make-a-call]')
}

function PhoneNrEntry() {
    return select('[data-cy=dialer-display]')
}

function CallBtn() {
    return select('[data-cy=call]')
}

function EndCallBtn() {
    return select('[data-cy=end-call]')
}

function DialPad() {
    return select('[data-cy=scorpion-dialer]')
}

function PhoneBtn() {
    return select('[data-cy=dock-app-tile-comms-phone]')
}

function CollapseBtn() {
    return select('[aria-label="Dialpad"]')
}

function MiniBtn() {
    return select('[data-cy=minimize-dialer]')
}

function MaxiBtn() {
    return select('[data-cy=maximize-dialer]')
}

function SidePan() {
    return select('scorpion-dialer-button[svgtitle="Call List"]')
}

function BackToDialPadBtn() {
    return select('div[title="Back"]')
}

function AddressBookBtn() {
    return select('div[title="Address Book"]')
}

function ExitBtn() {
    return select('[aria-label="exit"]')
}

function EndCallMinBtn() {
    return select('button.mod-red')
}

function DragBtn() {
    return select('[aria-label="double_ellipsis"]')
}

function AvailabilityBtn() {
    return Selector('[aria-label="Set Your Availability"]')
}

function AvailToggleBtn() {
    return Selector('div[data-cy=component]')
}

module.exports = {
    HomePage: HomePage,
    SearchBtn: SearchBtn,
    RowSearchBtn: RowSearchBtn,
    ArrowRightBtn: ArrowRightBtn,
    ClearSearch: ClearSearch,
    FilterBtn: FilterBtn,
    CancelBtn: CancelBtn,
    MakeCallBtn: MakeCallBtn,
    PhoneNrEntry: PhoneNrEntry,
    CallBtn: CallBtn,
    EndCallBtn: EndCallBtn,
    DialPad: DialPad,
    PhoneBtn: PhoneBtn,
    CollapseBtn: CollapseBtn,
    MiniBtn: MiniBtn,
    MaxiBtn: MaxiBtn,
    SidePan: SidePan,
    BackToDialPadBtn: BackToDialPadBtn,
    AddressBookBtn: AddressBookBtn,
    ExitBtn: ExitBtn,
    EndCallMinBtn: EndCallMinBtn,
    DragBtn: DragBtn,
    AvailabilityBtn: AvailabilityBtn,
    AvailToggleBtn: AvailToggleBtn
};
