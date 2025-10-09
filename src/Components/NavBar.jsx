export default function NavBar({username = "username"}) {
    return <div className="NavBar">
        <p className="NavUser">Hello {username}</p>
        <h1 className="NavTitle">C̶̢͕̯̭̫̞̏u̵̪͓͚̱̔̐̕r̷̨͗̿̊̀͜ͅs̴͚͂ȩ̸̱͐͒̔̾̿̓d̸͇̥̍̇̔̿͘ ̸̲̅̌̓͋͂G̶̜͕̤̳̬̥̀̽̓̇̀̋r̷̢͎͉̣̟̿̅̕͝͝o̵͉̖̍̎̌̏c̶̱̿͑͋e̴̻̝̫̘̐́͐r̷̙͓͔̲̲̄̌i̵̩̠̞͆̂͊̐̾̾e̸͇̮̣̺͇̅̈́̓s̴̢̃͝</h1>
        <h3 className="NavCart">🛒</h3>
    </div>
}