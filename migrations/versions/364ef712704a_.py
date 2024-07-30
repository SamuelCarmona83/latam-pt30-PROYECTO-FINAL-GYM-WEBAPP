"""empty message

Revision ID: 364ef712704a
Revises: 
Create Date: 2024-07-25 01:33:26.259365

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '364ef712704a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('muscle_group',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('objective',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=60), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('creation_date', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('body_measurement',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('height', sa.Float(), nullable=False),
    sa.Column('weight', sa.Float(), nullable=False),
    sa.Column('neck', sa.Float(), nullable=False),
    sa.Column('relaxed_arm', sa.Float(), nullable=False),
    sa.Column('flexed_arm', sa.Float(), nullable=False),
    sa.Column('waist', sa.Float(), nullable=False),
    sa.Column('calves', sa.Float(), nullable=False),
    sa.Column('chest', sa.Float(), nullable=False),
    sa.Column('hips', sa.Float(), nullable=False),
    sa.Column('thighs', sa.Float(), nullable=False),
    sa.Column('shoulders', sa.Float(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('exercises',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('Link_video', sa.String(length=50), nullable=True),
    sa.Column('muscle_group_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['muscle_group_id'], ['muscle_group.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('member',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=60), nullable=False),
    sa.Column('last_name', sa.String(length=60), nullable=False),
    sa.Column('gender', sa.String(length=10), nullable=False),
    sa.Column('height', sa.Float(), nullable=False),
    sa.Column('weight', sa.Float(), nullable=False),
    sa.Column('birthday', sa.String(length=10), nullable=False),
    sa.Column('city', sa.String(length=30), nullable=False),
    sa.Column('country', sa.String(length=30), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('objective_id', sa.Integer(), nullable=False),
    sa.CheckConstraint("gender IN ('male', 'female', 'other')", name='check_gender'),
    sa.ForeignKeyConstraint(['objective_id'], ['objective.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('workout_plan',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name_id', sa.String(length=50), nullable=False),
    sa.Column('sets', sa.String(length=50), nullable=False),
    sa.Column('reps', sa.Integer(), nullable=False),
    sa.Column('rest_time', sa.String(length=50), nullable=False),
    sa.Column('description_id', sa.String(length=255), nullable=True),
    sa.Column('training_day', sa.Integer(), nullable=True),
    sa.Column('super_set', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('member_id', sa.Integer(), nullable=False),
    sa.Column('exercise_id', sa.Integer(), nullable=False),
    sa.Column('muscle_group_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['exercise_id'], ['exercises.id'], ),
    sa.ForeignKeyConstraint(['member_id'], ['member.id'], ),
    sa.ForeignKeyConstraint(['muscle_group_id'], ['muscle_group.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('workout_plan')
    op.drop_table('member')
    op.drop_table('exercises')
    op.drop_table('body_measurement')
    op.drop_table('user')
    op.drop_table('objective')
    op.drop_table('muscle_group')
    # ### end Alembic commands ###
