import React from 'react'
import UserLayout from '../../hoc/UserLayout'
import MyButton from '../../utils/MyButton'
function UserDeshboard({ user }) {

    return (
        <UserLayout>
            <div>

                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                        <span>{user && user.name}</span>
                        <span>{user && user.lastname}</span>
                        <span>{user && user.email}</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>

                <div className="user_nfo_panel">
                    <h1>History purchases</h1>
                    <div className="user_product_block_wrapper">
                        history
                    </div>
                </div>


            </div>
        </UserLayout>

    )
}

export default UserDeshboard
